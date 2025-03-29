<script lang="ts">
    import {mount, onMount} from 'svelte';
  
    //import {  } from 'svelte/action';
    //import { mount } from '@svelte/kit';
  
    export let data: any;
  </script>

<svelte:head>
  <title>{data.metadata.title}</title>
  <!-- <meta name="description" content="A Wordle clone written in SvelteKit" />
  <meta name="description" content={data.metadata.description} />
  <meta property="og:image" content={data.metadata.ogImage} /> -->

  <meta property="og:title" content="{data.metadata.title}" />
  <meta property="og:description" content={data.metadata.description} />
  <meta property="og:image" content="{data.metadata.ogImage}" />
  <!-- <script src="/lib/SimpleVideoPlayer.js"></script> -->
</svelte:head>

<h1>Hello my fans</h1>

<img src={data.metadata.ogImage} /> 