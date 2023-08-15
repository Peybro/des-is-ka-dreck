<script lang="ts">
	import { page } from '$app/stores';

	let kekAlarm = false;
</script>

<h1>
	<button on:click={() => (kekAlarm = !kekAlarm)}><h1>{$page.url.pathname}</h1></button> gibt's bei uns
	nicht {#if kekAlarm}du Kek{/if}
</h1>

{#if kekAlarm}
	<img src="https://c.tenor.com/9ud1r4sc-QQAAAAC/tenor.gif" alt="Satz mit X" class="travolta" />
{/if}

<img
	src="https://craft.io/wp-content/uploads/2016/07/for_dummies_plain-1024x528.png"
	alt="Dummie"
	class="dummie-img"
/>

<style lang="scss" scoped>
    button {
        background: #000;
        color: #fff;
        border: 0;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        cursor: pointer;
    }

	img {
		max-width: 100%;
	}
</style>
