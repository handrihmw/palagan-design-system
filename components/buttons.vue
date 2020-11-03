<template>
    <div class="container">
        <div class="section">
            <h2 class="text-uppercase text-center mt-5 mb-4">Component Button</h2>
            <div class="all-section">
                <h3>Main Buttons</h3>
                <a class="btn nh-btn btn--primary btn--solid" href="javascript:void(0)">primary button</a>
                <a class="btn nh-btn btn--secondary btn--solid" href="javascript:void(0)">secondary button</a>
                <a class="btn nh-btn btn--success btn--solid" href="javascript:void(0)">success button</a>
                <a class="btn nh-btn btn--danger btn--solid" href="javascript:void(0)">danger button</a>
                <a class="btn nh-btn btn--dark btn--solid" href="javascript:void(0)">dark button</a>
                <a class="btn nh-btn btn--default btn--solid" href="javascript:void(0)">
                    <span class="mr-1">
                    <span class="fas fa-angle-double-left"></span>
                    </span> Icon Left
                </a>
                <a class="btn nh-btn btn--default btn--solid" href="javascript:void(0)">Icon Right
                    <span class="ml-1">
                    <span class="fas fa-angle-double-right"></span>
                    </span>
                </a>
                <a class="btn btn--icon btn--solid" href="javascript:void(0)" aria-label="icon button" title="icon button">
                    <span aria-hidden="true" class="far fa-heart"></span>
                </a>
                <a class="btn nh-btn btn--default btn--solid" href="javascript:void(0)" disabled="disabled">
                    <span class="ml-1">Loading...</span>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                </a>
                <div class="btn-group" role="group">
                    <button id="btnGroupDrop1" type="button" class="btn nh-btn btn--default btn--solid dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </button>
                    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <a class="dropdown-item" href="javascript:void(0)">Dropdown link</a>
                    <a class="dropdown-item" href="javascript:void(0)">Dropdown link</a>
                    </div>
                </div>
            </div>

            <div class="all-section">
                <h3>Pill Buttons</h3>
                <a class="btn nh-btn btn--primary btn--pill" href="javascript:void(0)">primary button</a>
                <a class="btn nh-btn btn--secondary btn--pill" href="javascript:void(0)">secondary button</a>
                <a class="btn nh-btn btn--success btn--pill" href="javascript:void(0)">success button</a>
                <a class="btn nh-btn btn--danger btn--pill" href="javascript:void(0)">danger button</a>
                <a class="btn nh-btn btn--dark btn--pill" href="javascript:void(0)">dark button</a>
                <a class="btn nh-btn btn--default btn--pill" href="javascript:void(0)">
                    <span class="mr-1">
                    <span class="fas fa-angle-double-left"></span>
                    </span> Icon Left
                </a>
                <a class="btn nh-btn btn--default btn--pill" href="javascript:void(0)">Icon Right
                    <span class="ml-1">
                    <span class="fas fa-angle-double-right"></span>
                    </span>
                </a>
                <a class="btn btn--icon btn--pill" href="javascript:void(0)" aria-label="icon button" title="icon button">
                    <span aria-hidden="true" class="fab fa-twitter"></span>
                </a>
                <a class="btn nh-btn btn--default btn--pill" href="javascript:void(0)" disabled="disabled">
                    <span class="ml-1">Loading...</span>
                    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                </a>
                <div class="btn-group" role="group">
                    <button id="btnGroupDrop1" type="button" class="btn nh-btn btn--default btn--pill dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </button>
                    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <a class="dropdown-item" href="javascript:void(0)">Dropdown link</a>
                    <a class="dropdown-item" href="javascript:void(0)">Dropdown link</a>
                    </div>
                </div>
            </div>

            <div class="all-section">
                <h3>Outline Buttons</h3>
                <a class="btn nh-btn btn--primary btn--outline" href="javascript:void(0)">primary button</a>
                <a class="btn nh-btn btn--secondary btn--outline" href="javascript:void(0)">secondary button</a>
                <a class="btn nh-btn btn--success btn--outline" href="javascript:void(0)">success button</a>
                <a class="btn nh-btn btn--danger btn--outline" href="javascript:void(0)">danger button</a>
                <a class="btn nh-btn btn--dark btn--outline" href="javascript:void(0)">dark button</a>
                <a class="btn nh-btn btn--default btn--outline" href="javascript:void(0)">
                <span class="mr-1">
                    <span class="fas fa-angle-double-left"></span>
                </span> Icon Left
                </a>
                <a class="btn nh-btn btn--default btn--outline" href="javascript:void(0)">Icon Right
                <span class="ml-1">
                    <span class="fas fa-angle-double-right"></span>
                </span>
                </a>
                <a class="btn btn--icon btn--outline" href="javascript:void(0)" aria-label="icon button" title="icon button">
                    <span aria-hidden="true" class="fab fa-google"></span>
                </a>
                <a class="btn nh-btn btn--default btn--outline" href="javascript:void(0)" disabled="disabled">
                    <span class="ml-1">Loading...</span>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                </a>
                <div class="btn-group" role="group">
                    <button id="btnGroupDrop1" type="button" class="btn nh-btn btn--default btn--outline dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                    </button>
                    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                        <a class="dropdown-item" href="javascript:void(0)">Dropdown link</a>
                        <a class="dropdown-item" href="javascript:void(0)">Dropdown link</a>
                    </div>
                </div>
            </div>

            <div class="all-section">
                <h3>Size Buttons</h3>
                <a class="btn nh-btn btn-dark btn-sm" href="javascript:void(0)">small button</a>
                <a class="btn nh-btn btn-dark btn-md" href="javascript:void(0)">medium button</a>
                <a class="btn nh-btn btn-dark btn-lg" href="javascript:void(0)">large button</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
