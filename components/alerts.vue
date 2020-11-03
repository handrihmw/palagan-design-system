<template>
    <div class="container">
        <div class="section">
            <h2 class="display-4 text-uppercase text-center mt-5 mb-5">Component Alert</h2>
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <span class="alert-inner--icon"><i class="ni ni-like-2"></i></span>
                <span class="alert-inner--text"><strong>Success!</strong> This is a success alert—check it out!</span>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>

            <div class="alert alert-info alert-dismissible fade show" role="alert">
                <span class="alert-inner--icon"><i class="ni ni-bell-55"></i></span>
                <span class="alert-inner--text"><strong>Info!</strong> This is an info alert—check it out!</span>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>

            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <span class="alert-inner--icon"><i class="ni ni-bell-55"></i></span>
                <span class="alert-inner--text"><strong>Warning!</strong> This is a warning alert—check it out!</span>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>

            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <span class="alert-inner--icon"><i class="ni ni-support-16"></i></span>
                <span class="alert-inner--text"><strong>Danger!</strong> This is an error alert—check it out!</span>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
