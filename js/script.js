const loadScripts = () =>{
    function useScroll(){
        const navbar = document.querySelector('.navbar');
        window.addEventListener('scroll', () =>{
            if(window.scrollY > 10){
                navbar.classList.add('fixed-top')
                navbar.classList.add('bg-dark')
                navbar.classList.add('opacity-75')
            }
            else{
                navbar.classList.remove('fixed-top')
                navbar.classList.remove('bg-dark')
                navbar.classList.remove('opacity-75')
            }
        });
    }
    document.addEventListener('DOMContentLoaded', useScroll);
};
export default loadScripts;


