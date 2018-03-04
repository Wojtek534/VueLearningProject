<template>
    <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="card">
            <div class="card-block quote">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['quote']
    }
</script>

<style>
    .card-block {
        font-size: 24px;
        color: #6e6e6e;
    }
    
    .quote {
        cursor: pointer;
    }
    
    .quote:hover {
        background-color: #f1f1f1;
    }
</style>