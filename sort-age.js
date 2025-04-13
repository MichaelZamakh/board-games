// This code is sourced from Design Code Hub
//This sorts the board games by age
(function() {
    // This selects the container that holds all the board game items
		
    let field = document.querySelector('.items');
    let li = Array.from(field.children);

    // This filters the board games by the name given in the h2 tag from the HTML
    function FilterProduct() {
        for(let i of li){
            const name = i.querySelector('h2');
            const x = name.textContent;
            i.setAttribute("data-category", x);
        }

        let indicator = document.querySelector('.indicator').children;

        this.run = function() {
            for(let i=0; i<indicator.length; i++)
            {
                indicator[i].onclick = function () {
                    for(let x=0; x<indicator.length; x++)
                    {
                        indicator[x].classList.remove('active');
                    }
                    this.classList.add('active');
                    const displayItems = this.getAttribute('data-filter');

                    for(let z=0; z<li.length; z++)
                    {
                        li[z].style.transform = "scale(0)";
                        setTimeout(()=>{
                            li[z].style.display = "none";
                        }, 500);

                        if ((li[z].getAttribute('data-category') == displayItems) || displayItems == "all")
                         {
                             li[z].style.transform = "scale(1)";
                             setTimeout(()=>{
                                li[z].style.display = "block";
                            }, 500);
                         }
                    }
                };
            }
        }
    }

    function SortProduct() {
        let select = document.getElementById('select-age');

        // This finds the age from each board game
        let ar = li.map((item) => {
            const ageSpan = item.querySelector('.age-players span:nth-child(1)');
            const ageText = ageSpan ? ageSpan.textContent.replace(/\D/g, '') : '0';
            const y = parseInt(ageText, 10);
            item.setAttribute("data-age", y);
            return item;
        });



        // This is the what does the sorting
        this.run = ()=>{
            addevent();
        }
        function addevent(){
            select.onchange = sortingValue;
        }

        // This sorts it based on the option selected
        function sortingValue(){
        
            if (this.value === 'Default') {
                while (field.firstChild) {field.removeChild(field.firstChild);}
                field.append(...ar);	
            }
            if (this.value === 'YoungestToOldest') {
                SortElem(field, li, true)
            }
            if (this.value === 'OldestToYoungest') {
                SortElem(field, li, false)
            }
        }
        function SortElem(field,li, asc){
            let  dm, sortli;
            dm = asc ? 1 : -1;
            sortli = [...li].sort((a, b)=>{
                const ax = a.getAttribute('data-age');
                const bx = b.getAttribute('data-age');
                return ax > bx ? (1 * dm) : (-1 * dm);
            });
            
             while (field.firstChild) {field.removeChild(field.firstChild);}
             field.append(...sortli);	
        }
    }

    new FilterProduct().run();
    new SortProduct().run();
})();












