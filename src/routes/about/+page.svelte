<script lang="ts">
	export let data;
</script>

<h1>Unsere Autoren</h1>

{#each data.authors as author}
	<div class="author">
		<div>
			<h2>{author.name}</h2>
			<p>
				<a href="mailto:{author.mail}"
					>{author.name
						.toLowerCase()
						.slice(0, -1)
						.replaceAll('. ', ' ')
						.replaceAll(' ', '.')}@desiskadreck.de</a
				>
			</p>
			<img
				src={author.img.extern ? author.img.src : `/autoren/${author.img.src}`}
				alt="Autor {author.name.split(' ')[0]}"
			/>
			{@html author.bio}
		</div>
	</div>
{/each}

<style scoped>
	h1 {
		margin-bottom: 2rem;
	}

	.author {
		display: flex;
		gap: 1rem;
		margin-bottom: 2rem;
		align-items: start;
	}

	img {
		float: left;
		width: 10rem;
		object-fit: scale-down;
		margin-right: 0.5rem;
		margin-bottom: 1rem;
	}

	:global(h2) {
		margin-bottom: 5px;
	}

	:global(p) {
		margin-bottom: 1rem;
	}

	:global(.blitze) {
		font-size: xx-large;
		display: inline-block;
		height: 20px;
		background-image: url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Flightning%2Flightning_PNG24.png&f=1&nofb=1&ipt=62b25a6ffc7d92875643f574374640e6515f9b442bf637d51cba7463433dc128&ipo=images');
		background-size: contain;
	}
</style>
