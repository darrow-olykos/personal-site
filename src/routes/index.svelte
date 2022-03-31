<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="content">
	<h1>Hey!</h1>
	<p>Welcome to my site.</p>

	<h3>RESUME</h3>
	<p>If you're a recruiter, you might be interested in my resume <a href="/resume">here</a>.</p>

	<h3>RUST PHILLY MEETUP</h3>
	<p>
		If you're a fellow software dev looking to hang out or talk shop, I spend a lot of time at <a
			target="_blank"
			rel="noopener noreferrer"
			href="https://meetup.com/RustPhilly">Rust Philly Meetup</a
		>
		events.
		<br /> Rust Philly has recurring events for:
	</p>
	<ul>
		<li>Rust (Rust for Rustaceans Book Club)</li>
		<li>Systems Design (Designing Data-Intensive Applications)</li>
		<li>
			Open Source (Contributing to <a
				target="_blank"
				rel="noopener noreferrer"
				href="https://rome.tools">Rome Tools</a
			>)
		</li>
	</ul>

	<h3>ABOUT ME</h3>
	<pre>I am a</pre>
	<ul>
		<li>Penn State Alum (We Are!)</li>
		<li>gamer</li>
		<li>nerd</li>
		<li>developer</li>
		<li>brother & son (my family means the world to me)</li>
		<li>(casual) snowboarder</li>
		<li>(casual) musician (guitar, piano)</li>
		<li>citizen of the city-state that is our universe</li>
	</ul>

	<pre>Stuff I like:</pre>
	<ul>
		<li>games, like:</li>
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
		<li>
			learning what other's are interested in (...like, a LOT. Tell me something you're passionate
			or curious about... Please...)
		</li>
		<li>
			Binge watching shows on streaming services, some of my favorites, in no particular order:
		</li>
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
			<li>Demon Slayer (in progresss...)</li>
			<li>The Flash</li>
			<li>The Arrow</li>
			<li>Kim's Convenience</li>
			<li>B: The Beginning</li>
			<li>Travelers</li>
			<li>Shameless</li>
			<li>The Umbrella Academy</li>
		</ul>
		<li>Fishing (rare moment of peace: sitting still, listening to quiet waves)</li>
		<li>Snowboarding (rare moment of peace: flying down a mountain at high speeds)</li>
		<li>travel (hoping to land a fully remote role next!)</li>
	</ul>

	<pre>Photos of myself and my favorite people:</pre>
	<img
		width="300px"
		src="photos/vg-event-with-mom.jpeg"
		alt="helping at a charity event with my mom"
	/>
	<img width="300px" src="photos/bros.jpeg" alt="my brothers and I when we were young" />
	<img
		width="300px"
		src="photos/sushi-with-brandon.jpeg"
		alt="making sushi with my older brother brandon"
	/>
	<img
		width="300px"
		src="photos/friend-pizza-boston.jpeg"
		alt="in boston with good friend after eating good pizza"
	/>
	<img
		width="300px"
		src="photos/fishing-with-dad.jpeg"
		alt="my dad and I on our way to go fishing"
	/>
	<img width="300px" src="photos/first-trip-boston.jpeg" alt="me and good friend" />
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

	h3 {
		padding-top: 24px;
	}
</style>
