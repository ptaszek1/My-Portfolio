document.addEventListener('DOMContentLoaded',function () {

    $(function () {




        $.fn.characterize = function (wrapper, options) {
            var txt = this.text(),
                self = this;

            this.empty();

            wrapper = wrapper || '<span />';
            options = options || {};

            Array.prototype.forEach.call(txt, function (c) {
                options.text = c;
                self.append($(wrapper, options));
            });
        };

        function animate () {
            var $h1Name = $('.header-dark .name2');
            const $h1Position = $('.text-white');

            $h1Name.characterize('<span />', {
                class: 'fd',
                css: {
                    opacity: 0
                }
            });
            $h1Name.css('opacity', 1);

            $h1Position.characterize('<span />', {
                class: 'fd',
                css: {
                    opacity: 0
                }
            });
            $h1Position.css('opacity', 1);

            $('.fd').each(function (i) {
                $(this).animate({opacity: 1}, (i + 1) * 300);
            });
        }


        animate();



    })





})