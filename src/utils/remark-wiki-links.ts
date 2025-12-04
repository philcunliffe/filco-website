import { visit } from 'unist-util-visit';
import slugify from '@sindresorhus/slugify';

export function remarkWikiLinks() {
  return (tree: any) => {
    visit(tree, 'text', (node, index, parent) => {
      const wikiLinkRegex = /\[\[([^\]]+)\]\]/g;
      const value = node.value as string;

      if (!wikiLinkRegex.test(value)) return;

      // Reset regex
      wikiLinkRegex.lastIndex = 0;

      const children: any[] = [];
      let lastIndex = 0;
      let match;

      while ((match = wikiLinkRegex.exec(value)) !== null) {
        // Add text before the match
        if (match.index > lastIndex) {
          children.push({
            type: 'text',
            value: value.slice(lastIndex, match.index),
          });
        }

        // Add the link
        const linkText = match[1];
        const href = `/garden/${slugify(linkText)}`;

        children.push({
          type: 'link',
          url: href,
          children: [{ type: 'text', value: linkText }],
        });

        lastIndex = match.index + match[0].length;
      }

      // Add remaining text
      if (lastIndex < value.length) {
        children.push({
          type: 'text',
          value: value.slice(lastIndex),
        });
      }

      if (children.length > 0 && parent && typeof index === 'number') {
        parent.children.splice(index, 1, ...children);
      }
    });
  };
}
