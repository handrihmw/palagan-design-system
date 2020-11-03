<template>
    <div class="container">
        <div class="section">
            <h2 class="display-4 text-uppercase text-center mt-5 mb-5">Component Tooltips</h2>
            <div class="row tooltips-popovers">
                <div class="col-lg-6">
                    <h3 class="mt-md mb-4">Tooltips</h3>
                    <button type="button" class="btn btn-sm btn-primary btn-tooltip" data-toggle="tooltip" data-placement="left" title="" data-container="body" data-animation="true" data-delay="100" data-original-title="Tooltip on left">On left</button>
                    <button type="button" class="btn btn-sm btn-success btn-tooltip" data-toggle="tooltip" data-placement="top" title="" data-container="body" data-animation="true" data-original-title="Tooltip on top">On top</button>
                    <button type="button" class="btn btn-sm btn-danger btn-tooltip" data-toggle="tooltip" data-placement="bottom" title="" data-container="body" data-animation="true" data-original-title="Tooltip on bottom">On bottom</button>
                    <button type="button" class="btn btn-sm btn-info btn-tooltip" data-toggle="tooltip" data-placement="right" title="" data-container="body" data-animation="true" data-original-title="Tooltip on right">On right</button>
                </div>
                <div class="col-lg-6 mt-4 mt-lg-0">
                    <h3 class="mt-md mb-4">Popovers</h3>
                    <button type="button" class="btn btn-sm btn-primary" data-container="body" data-original-title="Popover On Left" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">On left</button>
                    <button type="button" class="btn btn-sm btn-success" data-container="body" data-original-title="Popover on Top" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">On top</button>
                    <button type="button" class="btn btn-sm btn-danger" data-container="body" data-original-title="Popover on Right" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">On right</button>
                    <button type="button" class="btn btn-sm btn-info" data-container="body" data-original-title="Popover on Bottom" data-toggle="popover" data-placement="bottom" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">On bottom</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
