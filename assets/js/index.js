$(document).ready(function() {
    function show_menu() {
        $(".mobile-menu").removeClass('fade_out');
        $(".mobile-menu").addClass('fade_in');
    }

    function hide_menu() {
        $(".mobile-menu").removeClass('fade_in');
        $(".mobile-menu").addClass('fade_out');
    }

    function toggle_menu() {
        $(".mobile-menu").toggleClass('fade_in fade_out');
    }
    $("#mobile-icon").click(() => {
        show_menu()
    })

    $(".icon-menu").click(() => {
        hide_menu()
    })

    // handle change content
    const contents = ["home","shop","about","contact"]
    $(".menu a").click((e) => {
        hide_menu()
        let open_content = e.target.attributes.to.value
        for(let id_content of contents) {
            $(`#${id_content}`).removeClass("active").addClass("hidden ")
            if(id_content == open_content) {
                $(`#${open_content}`).addClass("active").removeClass("hidden ")
            }
        }
    })

    // css list product
     $(".item_product:nth-child(2n) img").addClass("order-2")
     $(".item_product:nth-child(2n) p").addClass("order-1")

});