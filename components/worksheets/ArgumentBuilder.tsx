'use client';
import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

type NodeItem = {
  id: string;
  text: string;
  children: NodeItem[];
};

function createNode(text = ''): NodeItem {
  return { id: uuid(), text, children: [] };
}

function NodeView({ node, onChange, onRemove, depth = 0 }: {
  node: NodeItem;
  onChange: (node: NodeItem) => void;
  onRemove: (id: string) => void;
  depth?: number;
}) {
  const [text, setText] = useState(node.text);
  useEffect(() => { setText(node.text); }, [node.text]);

  return (
    <div className="my-2 rounded-md border p-3">
      <div className="flex items-center gap-2">
        <span className="text-xs uppercase text-zinc-500">{depth === 0 ? 'Claim' : 'Support'}</span>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={() => onChange({ ...node, text })}
          placeholder={depth === 0 ? 'Main claim' : 'Reason / evidence'}
          className="w-full rounded border px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-300 dark:border-zinc-700 dark:bg-transparent"
        />
        {depth > 0 && (
          <button onClick={() => onRemove(node.id)} className="rounded border px-2 py-1 text-xs hover:bg-zinc-50 dark:hover:bg-zinc-800">Remove</button>
        )}
      </div>
      <div className="ml-4 mt-2 border-l pl-4">
        <button
          onClick={() => onChange({ ...node, children: [...node.children, createNode()] })}
          className="mb-2 rounded border px-2 py-1 text-xs hover:bg-zinc-50 dark:hover:bg-zinc-800"
        >
          Add support
        </button>
        {node.children.map((child) => (
          <NodeView
            key={child.id}
            node={child}
            depth={depth + 1}
            onRemove={(id) => onChange({ ...node, children: node.children.filter((c) => c.id !== id) })}
            onChange={(updated) => onChange({
              ...node,
              children: node.children.map((c) => (c.id === updated.id ? updated : c)),
            })}
          />
        ))}
      </div>
    </div>
  );
}

export default function ArgumentBuilder() {
  const [root, setRoot] = useState<NodeItem>(createNode());

  useEffect(() => {
    try {
      const saved = localStorage.getItem('argument-builder');
      if (saved) setRoot(JSON.parse(saved));
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem('argument-builder', JSON.stringify(root));
  }, [root]);

  function exportJSON() {
    const blob = new Blob([JSON.stringify(root, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'argument.json';
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div>
      <div className="mb-3 flex items-center gap-2">
        <button onClick={() => setRoot(createNode())} className="rounded border px-3 py-1.5 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800">New</button>
        <button onClick={exportJSON} className="rounded border px-3 py-1.5 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800">Export JSON</button>
      </div>
      <NodeView node={root} onChange={setRoot} onRemove={() => {}} />
    </div>
  );
}
