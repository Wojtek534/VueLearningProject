<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-md-6 mx-auto">
                <p>Build in directives</p>
                <p v-text="'some text'"></p>
                <p v-html="'<b>bold text</b>'"></p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-md-6 mx-auto">
                <p>Custom directives</p>
                <p v-highlight="'grey'">Some custom directive</p>
                <p v-local-hl="'teal'">Some custom local directive</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'local-hl': {
                bind(el, binding, vnode) {
                    el.style.backgroundColor = binding.value
    
                    if (binding.modifiers = ['blink']) {
                        let mainColor = binding.value
                        let subColor = 'blue'
                        let currentColor = mainColor
                        setTimeout(() => {
                            setInterval(() => {
                                    currentColor == subColor ? currentColor = mainColor : currentColor = subColor
                                    if (binding.arg = "background") {
                                        el.style.backgroundColor = currentColor
                                    } else {
                                        el.style.color = currentColor
                                    }
                            })
                        }, 1000)
                    }
                }
            }
        }
    }
</script>

