<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Wellcome in Dashboard</div>

                    <div class="card-body">
                        Tou are successfully logged in
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
              if(!this.$store.state.check){
                this.$router.push({ path: "/"});
            }
        }
    }
</script>
