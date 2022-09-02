import React from 'react';
import EditorJS, { OutputData } from '@editorjs/editorjs';

interface EditorProps {
  onChange: (blocks: OutputData['blocks']) => void;
  initialBlocks?: OutputData['blocks'];
  placeholder: string;
}

export const Editor: React.FC<EditorProps> = ({ onChange, initialBlocks, placeholder }) => {
  React.useEffect(() => {
    const editor = new EditorJS({
      holder: "editor",
      data: {
        blocks: initialBlocks,
      },
      placeholder: placeholder,
      async onChange() {
        const { blocks } = await editor.save();
        onChange(blocks);
      },
    });

    return () => {
      editor.isReady
        .then(() => {
          editor.destroy();
        })

        .catch((e) => console.error('ERROR editor cleanup', e));
    };
  }, []);

  return <div id={'editor'} />;
};
