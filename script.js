const navContainer = document.querySelector('.navitems-container')
const menubar = document.querySelector('.menu-bars')
const desktopMenu = document.querySelector('.features-controller.navitems-child-desktop')
const mobileBody = document.querySelector('.mobile-body')
const featuresContainer = document.querySelector('.features-container-desktop')
const desktopBody = document.querySelector('.desktop-view')
const langs = document.querySelector('.langs')
const langsController = document.querySelector('.lang-controller')



const notSeenDefault = document.querySelector('.not-seen-default')
const secondContainer = document.querySelector('.second-container')
const seenDefault = document.querySelector('.seen-default')

const openMenus = (e,element)=>{
    console.log('working')
    e.stopPropagation()
    const isOpen = element.getAttribute('data-visible');
    
    if(isOpen === 'false'){
        element.setAttribute('data-visible', 'true')
        
    }else{
        element.setAttribute('data-visible', 'false')
        
    }
}

menubar.onclick = (e) => openMenus(e,navContainer)

const closeMenus = (element)=>{
    const isOpen = element.getAttribute('data-visible');
    if(isOpen === 'true'){
        element.setAttribute('data-visible', 'false')
    }
}

mobileBody.onclick = ()=>{
    closeMenus(langs)
    closeMenus(navContainer)
}

desktopMenu.onclick = (e)=> openMenus(e,featuresContainer)

desktopBody.onclick = ()=>closeMenus(featuresContainer)



setTimeout(()=>{
    console.log('reached',notSeenDefault.style)

    notSeenDefault.style.display = 'block'
    secondContainer.classList.remove('hidden')
    secondContainer.classList.add('visible')
    seenDefault.style.display = 'none'
    
},2000)



const languages = ['English','Nederlands','Italiano','Francais','Deutsch','Espanol','Polski','Portugues','Portugues Brasil','Espanol Latino','Turkce','Bokmal','Dansk','Svenska']


languages.forEach(
    lang=>langs.innerHTML += `<p class='links-child'>${lang}</p>`
)


langsController.onclick = (e)=> openMenus(e,langs)



