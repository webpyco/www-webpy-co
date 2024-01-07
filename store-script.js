<script>
        function hideIfEmpty(id) {
            var h2Element = document.querySelector(`#${id} h2`);

            if (h2Element && h2Element.textContent.trim() === '') {
                var divToHide = document.querySelector(`#${id}`);
                divToHide.style.display = 'none';
            }
        }

        document.addEventListener('DOMContentLoaded', function () {
            hideIfEmpty('f1');
            hideIfEmpty('f2');
            hideIfEmpty('f3');
            hideIfEmpty('f4');
            hideIfEmpty('f5');
            hideIfEmpty('f6');
	          hideIfEmpty('f7');
	          hideIfEmpty('f8');
	          hideIfEmpty('f9');
	          hideIfEmpty('f10');
	          hideIfEmpty('f11');
	          hideIfEmpty('f12');
	          hideIfEmpty('f13');
	          hideIfEmpty('f14');
	          hideIfEmpty('f15');
	          hideIfEmpty('f16');
	          hideIfEmpty('f17');
	          hideIfEmpty('f18');
        });
</script>
