<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="content">
	<h1>Hello, friend.</h1>

	<pre>My name is Chris. I am a</pre>
	<ul>
		<li>gamer</li>
		<li>nerd</li>
		<li>traveler</li>
		<li>developer</li>
		<li>brother</li>
		<li>son</li>
		<li>citizen of the city-state that is our universe</li>
	</ul>

	<pre>I find joy in</pre>
	<ul>
		<li>games like:</li>
		<ul>
			<li>Minecraft (Ask to join my realms server!)</li>
			<li>All social deduction games (Avalon, Among Us, etc)</li>
			<li>Detroit: Become Human (More of a movie than a game IMHO)</li>
			<li>Dying Light: Stay Human (The cost of operational drift is...becoming a Zombie)</li>
			<li>Ratch and Clank (All of them!)</li>
			<li>Spryo (All of them! - My "childhood" game)</li>
			<li>Ghost of Tsushima (Just started this one...)</li>
			<li>Rocket League</li>
			<li>Valorant</li>
		</ul>
		<li>learning from other engineers (like, a LOT. Tell me something you're passionate about...)</li>
		<li>Unapologetically binge watching shows on streaming services, some of my favorites, in no particular order:</li>
		<ul>
			<li>Shadow and Bone</li>
			<li>Loki</li>
			<li>Community &#60;- (Can never go wrong)</li>
			<li>Cowboy Bepop</li>
			<li>Love is Blind (It's good, I swear!)</li>
			<li>The Good Place</li>
			<li>Disenchantment</li>
			<li>Bojack Horseman</li>
			<li>Space Force</li>
			<li>The Witcher</li>
			<li>Altered Carbon</li>
			<li>The Flash</li>
			<li>The Arrow</li>
			<li>Kim's Convenience</li>
			<li>B: The Beginning</li>
		</ul>
		<li>Fishing (only when I rarely go)</li>
		<li>Snowboarding</li>
		<li>Making lists</li>
	</ul>

	<pre>Photos</pre>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}

	li {
		margin-left: 48px;
	}

	ul ul li {
		margin-left: 96px;
	}
</style>
