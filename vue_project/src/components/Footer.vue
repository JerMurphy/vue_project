<template>
    <div>
        <b-navbar toggleable="md" type="dark" variant="dark" fixed="bottom">
            <div class="col col-sm-4"></div>
            <div class="col col-sm-4">
                <b-nav-form>
                    <b-form-input class="mr-sm-2" type="text" placeholder="Song Title"></b-form-input>
                    <b-form-input class="mr-sm-2" type="text" placeholder="Artist"></b-form-input>
                    <b-button variant="outline-danger" class="my-2 my-sm-0" type="submit">Add</b-button>
                </b-nav-form>
            </div>
            <div class="col col-sm-4"></div>
            
        </b-navbar>
    </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.logo_img {
  height: 50px;
  width: 50px;
}
</style>

