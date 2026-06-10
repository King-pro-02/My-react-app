const categories = ['Technology','sports','health','fitness','academics','food', 'fashion','fantasy','fiction','action']

const logo = 'BookSite'

const links = [
    {
        name:'Home',
        link: "/"
    },
     {
        name:'Profile',
        link: "/profile"
    },
     {
        name:'Login',
        link: "/login"
    },
     {
        name:'Register',
        link: "/register"
    },

]

const bookdetails = [
    {img:'https://i1-c.pinimg.com/736x/c3/b4/fc/c3b4fcef2eb8b7e9f75c7a329122c2d2.jpg',
    booktitle:'Harry-Porter',
    bookdescription:'fantasy, magic, adventure',
    },
    {img:'https://i1-c.pinimg.com/736x/1b/83/b7/1b83b7fd9aba1bc0a5087968dbe4ce70.jpg',
    booktitle:'Dune',
    bookdescription:'sci-fi, action, drama',
    },
    {img:'https://i1-c.pinimg.com/736x/de/25/82/de2582088c2d901b388de803925828d4.jpg',
    booktitle:'Money Ball',
    bookdescription:'sports, faith',
    },
    {img:'https://i.pinimg.com/736x/ac/9b/e4/ac9be4ecb77a4907220bca3cc1e33e47.jpg',
    booktitle:'After Everything',
    bookdescription:'Romance, drama',
    }
]

export {categories, links, bookdetails};