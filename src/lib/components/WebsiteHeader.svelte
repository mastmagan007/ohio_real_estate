<script>
  import WebsiteNav from '$lib/components/WebsiteNav.svelte';
  import Modal from '$lib/components/Modal.svelte';
  import EditorToolbar from '$lib/components/tools/EditorToolbar.svelte';
  import { createEventDispatcher } from 'svelte';

  export let showUserMenu = false;
  const dispatch = createEventDispatcher();

</script>

<EditorToolbar on:cancel={() => dispatch('cancel')} on:save={() => dispatch('save')} />
<WebsiteNav bind:showUserMenu />
{#if showUserMenu}
  <Modal on:close={() => (showUserMenu = false)}>
    <div class="w-full flex flex-col" id="smooth-wrapper">
      <slot />
    </div>
  </Modal>
{/if}
