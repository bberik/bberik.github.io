<script lang="ts">
	import { getAssetURL } from '$lib/data/assets';
	import {ProfilePic } from '$lib/data/home'
</script>


<img class="w-240px" src={getAssetURL(ProfilePic.url)} alt={ProfilePic.altText} />


