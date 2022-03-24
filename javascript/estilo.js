<script>
    let inputs = document.getElementsByClassName("input-form");
    for (let input of inputs) {
        Input.addEventListener("blur", function(){
            if(Input.value.trim() !="") {
                Input.classList.add("has-val");
            } else {
                Input.classList.remove("has-val");
            }
        });
    }
</script>