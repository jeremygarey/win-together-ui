
   <template>
  <div v-if="editor" class="bg-gray-700 p-2 rounded-t">
    <button
      class="p-1 rounded bg-gray-800 mr-1 font-black hover:bg-gray-900"
      @click="editor.chain().focus().toggleBold().run()"
      :disabled="!editor.can().chain().focus().toggleBold().run()"
      :class="editor.isActive('bold') ? 'border border-green' : ''"
    >
      B
    </button>
    <button
      class="
        p-1
        pr-2
        rounded
        bg-gray-800
        mr-1
        mb-1
        font-light
        italic
        hover:bg-gray-900
      "
      @click="editor.chain().focus().toggleItalic().run()"
      :disabled="!editor.can().chain().focus().toggleItalic().run()"
      :class="editor.isActive('italic') ? 'border border-green' : ''"
    >
      I
    </button>
    <button
      class="p-1 rounded bg-gray-800 mr-1 mb-1 line-through hover:bg-gray-900"
      @click="editor.chain().focus().toggleStrike().run()"
      :disabled="!editor.can().chain().focus().toggleStrike().run()"
      :class="editor.isActive('strike') ? 'border border-green' : ''"
    >
      S
    </button>
    <button
      class="p-1 rounded bg-gray-800 mr-1 mb-1 hover:bg-gray-900"
      @click="editor.chain().focus().setParagraph().run()"
      :class="editor.isActive('paragraph') ? 'border border-green' : ''"
    >
      p
    </button>
    <button
      class="p-1 rounded bg-gray-800 mr-1 mb-1 hover:bg-gray-900"
      @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
      :class="
        editor.isActive('heading', { level: 1 }) ? 'border border-green' : ''
      "
    >
      h1
    </button>
    <button
      class="p-1 rounded bg-gray-800 mr-1 mb-1 hover:bg-gray-900"
      @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
      :class="
        editor.isActive('heading', { level: 2 }) ? 'border border-green' : ''
      "
    >
      h2
    </button>
    <button
      class="p-1 rounded bg-gray-800 mr-1 mb-1 hover:bg-gray-900"
      @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
      :class="
        editor.isActive('heading', { level: 3 }) ? 'border border-green' : ''
      "
    >
      h3
    </button>
    <button
      class="p-1 rounded bg-gray-800 mr-1 mb-1 hover:bg-gray-900"
      @click="editor.chain().focus().toggleBulletList().run()"
      :class="editor.isActive('bulletList') ? 'border border-green' : ''"
    >
      bullet list
    </button>
    <button
      class="p-1 rounded bg-gray-800 mr-1 mb-1 hover:bg-gray-900"
      @click="editor.chain().focus().toggleOrderedList().run()"
      :class="editor.isActive('orderedList') ? 'border border-green' : ''"
    >
      ordered list
    </button>
    <!-- <button
        class="p-1 rounded bg-gray-800 mr-1 mb-1 hover:bg-gray-900"
        @click="editor.chain().focus().toggleCodeBlock().run()"
        :class="{ 'is-active': editor.isActive('codeBlock') }"
      >
        code block
      </button> -->
    <button
      class="p-1 rounded bg-gray-800 mr-1 mb-1 hover:bg-gray-900"
      @click="editor.chain().focus().toggleBlockquote().run()"
      :class="editor.isActive('blockquote') ? 'border border-green' : ''"
    >
      | -->
    </button>
    <button
      class="p-1 rounded bg-gray-800 mr-1 mb-1 hover:bg-gray-900"
      @click="editor.chain().focus().setHorizontalRule().run()"
    >
      __
    </button>
    <button
      class="p-1 rounded bg-gray-800 mr-1 mb-1 hover:bg-gray-900"
      @click="editor.chain().focus().setHardBreak().run()"
    >
      <br />
    </button>
    <button
      class="p-1 rounded bg-gray-800 mr-1 mb-1 hover:bg-gray-900"
      @click="editor.chain().focus().undo().run()"
      :disabled="!editor.can().chain().focus().undo().run()"
    >
      undo
    </button>
    <button
      class="p-1 rounded bg-gray-800 mr-1 mb-1 hover:bg-gray-900"
      @click="editor.chain().focus().redo().run()"
      :disabled="!editor.can().chain().focus().redo().run()"
    >
      redo
    </button>
  </div>

  <editor-content
    :editor="editor"
    class="p-2 border border-gray-700 border-4 rounded-b focus:outline-none"
  />
</template>
  
  <script>
import StarterKit from "@tiptap/starter-kit";
import { Editor, EditorContent } from "@tiptap/vue-3";

export default {
  components: {
    EditorContent,
  },

  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },

  emits: ["update:modelValue"],

  data() {
    return {
      editor: null,
    };
  },

  watch: {
    modelValue(value) {
      // HTML
      const isSame = this.editor.getHTML() === value;

      // JSON
      // const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value)

      if (isSame) {
        return;
      }

      this.editor.commands.setContent(value, false);
    },
  },

  mounted() {
    this.editor = new Editor({
      extensions: [StarterKit],
      content: this.modelValue,
      onUpdate: () => {
        // HTML
        this.$emit("update:modelValue", this.editor.getHTML());

        // JSON
        // this.$emit('update:modelValue', this.editor.getJSON())
      },
    });
  },

  beforeUnmount() {
    this.editor.destroy();
  },
};
</script>

<style lang="scss">
/* Basic editor styles */
.ProseMirror {
  > * + * {
    margin-top: 0.75em;
  }

  ul,
  ol {
    padding: 0 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #0d0d0d;
    color: #fff;
    font-family: "JetBrainsMono", monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0d0d0d, 0.1);
  }

  hr {
    border: none;
    border-top: 2px solid rgba(#0d0d0d, 0.1);
    margin: 2rem 0;
  }
}
</style>