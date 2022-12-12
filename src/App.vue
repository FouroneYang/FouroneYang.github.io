<template>
  <div id="app">
  	<Appheader></Appheader>
  	<router-view></router-view>
		<Appfooter></Appfooter>
  </div>
</template>

<script>
import header from './components/header'
import footer from './components/footer'
export default {
  name: 'App',
  components: {
  	Appheader:header,
  	Appfooter:footer,
 }
}
</script>

<style>
	* {
		padding: 0;
		margin: 0;

	}
	body {
				background: #f4f5fa;
	}
</style>
