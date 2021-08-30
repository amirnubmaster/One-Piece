const dataBase = [
    {
        id:1,
        name:'Monkey-D-Luffy',
        bounty:1500000000,
        level:'5th Yonkou',
        qualification:'Strawhat pirates',
        fruit:'Gomu Gomu no Mi',
        power:'Gear , Haki',
        image:'https://c.tenor.com/YNhKSlGrgxsAAAAC/one-piece-luffy.gif'
    },
    {
        id:2,
        name:'Roronoa Zoro',
        bounty:320000000,
        level:'First helper',
        qualification:'Strawhat pirates',
        fruit:'no fruit',
        power:'Santoryu , Haki',
        image:'https://c.tenor.com/5JeSaTdVSaQAAAAd/roronoa-zoro-anime.gif'
    },
    {
        id:3,
        name:'God Usopp',
        bounty:200000000,
        level:'Sniper',
        qualification:'Strawhat pirates',
        fruit:'no fruit',
        power:'Kabuto , Haki',
        image:'https://64.media.tumblr.com/691fd6f056561692f902308595612b69/c0e0c213387f7a69-dd/s1280x1920/f38d44a9df7800b755eae27b6b59c3271a23c6d0.gifv'
    },
    {
        id:4,
        name:'Vinsmoke Sanji',
        bounty:330000000,
        level:'Cook',
        qualification:'Strawhat pirates',
        fruit:'no fruit',
        power:'Black leg , Haki',
        image:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ab7435a7-1c0d-4a54-beaa-7897c9a51468/dbrr9q7-92a465e0-7aee-4b94-93c4-8df4f567ef73.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FiNzQzNWE3LTFjMGQtNGE1NC1iZWFhLTc4OTdjOWE1MTQ2OFwvZGJycjlxNy05MmE0NjVlMC03YWVlLTRiOTQtOTNjNC04ZGY0ZjU2N2VmNzMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.QAd1PNv0KDaIjgErtan4LJB6pR6-ynfM3LYOKosmwN8'
    },
    {
        id:5,
        name:'Nami',
        bounty:66000000,
        level:'Navigator',
        qualification:'Strawhat pirates',
        fruit:'no fruit',
        power:'Clima-Tact',
        image:'https://i.gifer.com/FQUZ.gif'
    },
    {
        id:6,
        name:'Tony Tony Chopper',
        bounty:100,
        level:'Doctor',
        qualification:'Strawhat pirates',
        fruit:'Hito Hito no Mi Model: Daibutsu',
        power:'Rumble Ball',
        image:'https://i.gifer.com/da.gif'
    },
    {
        id:7,
        name:'Nico Robin',
        bounty:130000000,
        level:'Archaeologist',
        qualification:'Strawhat pirates',
        fruit:'Hana Hana no Mi',
        power:'Knows how to read a Paneglyph',
        image:'https://i.pinimg.com/originals/1f/d0/c8/1fd0c8878f3dd9991a5370d758c672a7.gif'
    },
    {
        id:8,
        name:'Franky',
        bounty:94000000,
        level:'A carpenter',
        qualification:'Strawhat pirates',
        fruit:'no fruit',
        power:'Kiborg , Iron Man: Franky',
        image:'https://64.media.tumblr.com/c0afd369b77788000fd150905f0f84be/tumblr_nws9xmfrXo1tp5yuio1_540.gifv'
    },
    {
        id:9,
        name:'Brook',
        bounty:83000000,
        level:'Musician',
        qualification:'Strawhat pirates',
        fruit:'Yomi Yomi no Mi',
        power:'Soul King',
        image:'https://64.media.tumblr.com/e1918ba8acdbbe47a7ddff7d9b3bd011/tumblr_pjh3ua36sl1t45pbyo1_500.gifv'
    },
    {
        id:10,
        name:'Jinbei',
        bounty:438000000,
        level:'Shichibukai',
        qualification:'Strawhat pirates',
        fruit:'no fruit',
        power:'Fish karate , Haki',
        image:'https://thumbs.gfycat.com/MistyWelloffHamadryas-size_restricted.gif'
    },
    {
        id:11,
        name:'Trafalgar-D-Water Law',
        bounty:500000000,
        level:'Shichibukai',
        qualification:'Heart pirates',
        fruit:'Ope Ope no Mi',
        power:'Room',
        image:'https://64.media.tumblr.com/a4cf607d2b7154bf015b0aca2ce74958/dcf46331a837a457-71/s400x600/099c7a5849037473852e155e57a20519e16a1326.gifv'
    },
    {
        id:12,
        name:'Eustass Kid',
        bounty:470000000,
        level:'Captain',
        qualification:'Kid pirates',
        fruit:'Jiki Jiki no Mi',
        power:'Magnetism',
        image:'https://64.media.tumblr.com/456e6da00ff14761b4a8613dcf96173f/439cba928f5d1047-fc/s640x960/55979d80e2f1e1bd7a9583840b2ff3a8421172ec.gifv'
    },
    {
        id:13,
        name:'Killer',
        bounty:200000000,
        level:'First helper',
        qualification:'Kid pirates',
        fruit:'no fruit',
        power:'Nitoryu',
        image:'https://64.media.tumblr.com/71b481df3c4a2d79e74c49e28a210757/0fbb1d7989639743-3a/s640x960/72ce097bff11937c9364e0735c9b8a673610a88f.gifv'
    },
    {
        id:14,
        name:'Basil Hawkins',
        bounty:320000000,
        level: 'Captain',
        qualification:'Hawkins pirates',
        fruit:'Wara Wara no Mi',
        power:'Magician',
        image:'https://64.media.tumblr.com/5255318d960253a7defb27b899d955a1/2159cf0b0d3bb711-30/s500x750/2cbbf89e830bebc59fa4bdf46fd62d54ba0ef80d.gifv'
    },
    {
        id:15,
        name:'Capone "Gang" Bege',
        bounty:350000000,
        level:'Captain',
        qualification:'Fire Tank pirates',
        fruit:'Shiro Shiro no Mi',
        power:'The Castle',
        image:'https://img.wattpad.com/3116df886e7e17f1c1add04ce65fbfb08642c2e4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f326a30454a4a714e417349696c413d3d2d3938372e313562613866643533373034313762633237303534313137353339302e676966'
    },
    {
        id:16,
        name:'Jewelry Bonney',
        bounty:140000000,
        level:'Captain',
        qualification:'Bonney pirates',
        fruit:'Akuma no Mi',
        power:'???',
        image:'https://64.media.tumblr.com/d5e08d847a99aba158abfb5e9e393155/tumblr_ppth8j5PKQ1whewpbo7_540.gifv'
    },
    {
        id:17,
        name:'X Drake',
        bounty:222000000,
        level:'Captain',
        qualification:'Drake pirates',
        fruit:'Ryu Ryu no Mi',
        power:'Ancient zoan',
        image:'https://64.media.tumblr.com/92056b1d4b223463e902c99c3ba9bc30/a5173f27133ad862-b7/s540x810/cc4d120472826b38cd2371e7fd00da4102122bb9.gifv'
    },
    {
        id:18,
        name:'Scratchmen Apoo',
        bounty:350000000,
        level:'Captain',
        qualification:'On Air pirates',
        fruit:'Unknown fruit',
        power:'Musician',
        image:'https://64.media.tumblr.com/f2ec09708f3c7e1e1d8ae60e695053b2/0ceaaedad6350ce8-80/s540x810/51ac02b331c57fc178a9fc2d874253b6a82eb514.gifv'
    },
    {
        id:19,
        name:'Urouge',
        bounty:108000000,
        level:'Captain',
        qualification:'Fallen Monk pirates',
        fruit:'Unknown fruit',
        power:'Mad Monk',
        image:'https://c.tenor.com/Qu0Tc2PieyMAAAAC/urouge.gif'
    },
    {
        id:20,
        name:'Marshall-D-Teech ',
        bounty:2247600000,
        level:'4th Yonkou',
        qualification:'Blackbeard pirates',
        fruit:'Yami Yami no Mi , Gura Gura no Mi',
        power:'Disconnection of forces',
        image:'https://media.giphy.com/media/ydzQHfHIDdvqEyA5cN/giphy.gif'
    },
    {
        id:21,
        name:'Charlotte Linlin',
        bounty:4388000000,
        level:'3th Yonkou',
        qualification:'Big Mom pirates',
        fruit:'Soru Soru no Mi',
        power:'Soul Qeen',
        image:'https://media3.giphy.com/media/U7vhCyKkPnhhhuFCQN/giphy.gif'
    },
    {
        id:22,
        name:'Kaido',
        bounty:4611100000,
        level:'2th Yonkou',
        qualification:'Beasts pirates',
        fruit:'Uo Uo no Mi Model: Seiryu',
        power:'"The Strongest Creature"',
        image:'https://i.pinimg.com/originals/48/79/f5/4879f5159b4905d90f03bf591e16b074.gif'
    },
    {
        id:23,
        name:'Shanks',
        bounty:4048900000,
        level:'1th Yonkou',
        qualification:'Red Hair pirates',
        fruit:'no fruit',
        power:'Haki',
        image:'https://data.whicdn.com/images/339024996/original.gif'
    },
    {
        id:24,
        name:'Edward Newgate',
        bounty:5046000000,
        level:'The Strongest Man in the World',
        qualification:'Whitebeard pirates',
        fruit:'Gura Gura no Mi',
        power:'Sound of shaking',
        image:'https://64.media.tumblr.com/82e97f6fff928d1593373a22fb3f93ad/9ed1ddeb95162b38-2a/s1280x1920/9db5c3794aeb494e1d5d57e49d513319218c97d2.gifv'
    },
    {
        id:25,
        name:'Edward Weevil',
        bounty:480000000,
        level:'Shichibukai',
        qualification:'???',
        fruit:'???',
        power:'???',
        image:'https://c.tenor.com/zoSPICfXb0cAAAAd/one-piece-edward-weevil.gif'
    },
    {
        id:26,
        name:'Buggy',
        bounty:15000000,
        level:'Shichibukai',
        qualification:'Buggy pirates',
        fruit:'Bara Bara no Mi',
        power:'Scattered; in pieces',
        image:'https://64.media.tumblr.com/8497a2675cd719987eb9bf5c435411b4/5b422f945dcb54f0-6f/s500x750/152d8f00b6a05e49525867466d2182db5aa84895.gifv'
    },
    {
        id:27,
        name:'Dracule Mihawk',
        bounty:'???',
        level:'Shichibukai',
        qualification:'no pirates',
        fruit:'no fruit',
        power:'"Strongest Swordsman in the World"',
        image:'https://64.media.tumblr.com/a4742b8f311120d5d9446476da2f3756/ea5b69604ab54c76-a7/s500x750/f3e323775e7830d22289702813e4b0194bd1b4e6.gifv'
    },
    {
        id:28,
        name:'Boa Hancock',
        bounty:80000000,
        level:'Shichibukai',
        qualification:'Kuja pirates',
        fruit:'Mero Mero no Mi',
        power:'Empress of Amazon Lily',
        image:'https://data.whicdn.com/images/352202273/original.gif'
    },
    {
        id:29,
        name:'Bartholomew Kuma',
        bounty:296000000,
        level:'Shichibukai',
        qualification:'Revolutionary Army',
        fruit:'Nikyu Nikyu no Mi',
        power:'Paw',
        image:'https://i.pinimg.com/originals/04/0e/fb/040efb2ebdcdaa240937a14c2378ae4e.gif'
    },
    {
        id:30,
        name:'Donquixote Doflamingo',
        bounty:340000000,
        level:'Shichibukai',
        qualification:'Donquixote family',
        fruit:'Ito Ito no Mi',
        power:'Threads',
        image:'https://c.tenor.com/lLL13qJ2R7MAAAAd/doflamingo.gif'
    },
    {
        id:31,
        name:'Gecko Moria',
        bounty:320000000,
        level:'Shichibukai',
        qualification:'Thriller Bark pirates',
        fruit:'Kage Kage no Mi',
        power:'Shadow',
        image:'https://64.media.tumblr.com/99a4496aeaa283a61132f6f422fc560b/3f8b1d4076ae4755-88/s540x810/301e7b48c1f2366a099857eb0a52bf7624c080bc.gifv'
    },
    {
        id:32,
        name:'Crocodile',
        bounty:81000000,
        level:'Shichibukai',
        qualification:'Baroque Works',
        fruit:'Suna Suna no Mi',
        power:'Sand',
        image:'https://c.tenor.com/Qcsm1-lf58kAAAAd/one-piece-crocodile.gif'
    },
    {
        id:33,
        name:'Borsalino',
        bounty:'No bounty',
        level:'Admiral',
        qualification:'Marines',
        fruit:'Pika Pika no Mi',
        power:'Light',
        image:'https://img.wattpad.com/59f9380367c0fa7aa3b5d212d2bdb51f6a65ab3e/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f445344396d78516b5f6e6a594f673d3d2d3939332e313562616264623033383232663965363533373735323332373430302e676966'
    },
    {
        id:34,
        name:'Issho',
        bounty:'No bounty',
        level:'Admiral',
        qualification:'Marines',
        fruit:'Zushi Zushi no Mi',
        power:'Gravity',
        image:'https://static.comicvine.com/uploads/original/11127/111271138/6221782-tumblr_o3cii0ewit1uur287o1_500.gif'
    },
    {
        id:35,
        name:'Kuzan',
        bounty:'No bounty',
        level:'Admiral',
        qualification:'Marines',
        fruit:'Hie Hie no Mi',
        power:'Ice',
        image:'https://static.wikia.nocookie.net/637e151c-844f-4d9a-984e-de0c41c8f567'
    },
    {
        id:36,
        name:'Sakazuki',
        bounty:'No bounty',
        level:'Admiral',
        qualification:'Marines',
        fruit:'Magu Magu no Mi',
        power:'Magma',
        image:'https://img.chuing.net/i/eyyGpyy/revol_getimg-6.gif'
    },
    {
        id:37,
        name:'Monkey-D-Garp',
        bounty:'No bounty',
        level:'Vice Admiral',
        qualification:'Marines',
        fruit:'no Fruit',
        power:'Haki',
        image:'https://64.media.tumblr.com/698cf17767452a4166c4cf146436b390/cbf71a6ad12fdb13-59/s540x810/c86b5951fc8eb1bb63f95f9eb8b7ab6a0c500335.gifv'
    },
    {
        id:38,
        name:'Sengoku',
        bounty:'No bounty',
        level:'General',
        qualification:'Marines',
        fruit:'Hito Hito no Mi Model: Daibutsu',
        power:'Haki , Buddha',
        image:'https://thumbs.gfycat.com/EquatorialInfiniteGreatargus-size_restricted.gif'
    },
    {
        id:39,
        name:'Sabo',
        bounty:602000000,
        level:'Revolutionary',
        qualification:'Revolutionary Army',
        fruit:'Mera Mera no Mi',
        power:'Claws of a Dragon ',
        image:'https://thumbs.gfycat.com/MisguidedMiserlyButterfly-max-1mb.gif'
    },
    {
        id:40,
        name:'Portgas-D-Ace',
        bounty:550000000,
        level:'2nd Division Commander',
        qualification:'Spade Pirates',
        fruit:'Mera Mera no Mi',
        power:'Fire',
        image:'https://i.gifer.com/5kr0.gif'
    },
    {
        id:41,
        name:'Marco',
        bounty:1374000000,
        level:'1st Division Commander',
        qualification:'Whitebeard pirates',
        fruit:'Tori Tori no Mi Model: Phoenix',
        power:'Healing',
        image:'https://i.pinimg.com/originals/55/22/bd/5522bda930a74cd77c5d68e04e03155d.gif'
    },
    {
        id:42,
        name:'Gol-D-Roger',
        bounty:5564800000,
        level:'Pirate King',
        qualification:'Roger pirates',
        fruit:'no fruit',
        power:'Haki',
        image:'https://64.media.tumblr.com/85530fc7ab578a51761d286658b6ca7b/927719c664dad90e-11/s500x750/8c7e09ccc70b6a00f4a31bd11e0a44a8f10fa784.gifv'
    },
    {
        id:43,
        name:'Silvers Rayleigh',
        bounty:'???',
        level:'First helper',
        qualification:'Roger pirates',
        fruit:'no fruit',
        power:'Haki',
        image:'https://64.media.tumblr.com/cb105c77e69b7068c3dd661944fc270f/0497d47c1bc6752f-98/s640x960/3de0807a23edbbdb6a3d53257ac8740c14e68438.gifv'
    },
    {
        id:44,
        name:'Perona',
        bounty:'???',
        level:'Wild Zombies and Surprise Zombies Commander',
        qualification:'Thriller Bark pirates',
        fruit:'Horo Horo no Mi',
        power:'Ghost',
        image:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0a290752-d7eb-45e3-aa31-8e71b544cde0/ddo6uy1-1a4f47d7-3a22-4aa7-bd4b-eb4d574cf881.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBhMjkwNzUyLWQ3ZWItNDVlMy1hYTMxLThlNzFiNTQ0Y2RlMFwvZGRvNnV5MS0xYTRmNDdkNy0zYTIyLTRhYTctYmQ0Yi1lYjRkNTc0Y2Y4ODEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JUDF9QtHAkYL9MmSTEOvKH95RJIqeJe6ZyJdHL7B3VY'
    },
    {
        id:45,
        name:'Benn Beckman',
        bounty:'???',
        level:'First helper',
        qualification:'Red Hair pirates',
        fruit:'no fruit',
        power:'Haki',
        image:'https://64.media.tumblr.com/661a84e82fbb77454f91688b7778b80a/8c1d4bd86ea91e02-a2/s400x600/81c5fe992c5fd3ea07f1dd2be84e42448f0761a6.gifv'
    },
    {
        id:46,
        name:'Charlotte Katakuri',
        bounty:1057000000,
        level:'Sweet Commander',
        qualification:'Big Mom pirates',
        fruit:'Mochi Mochi no Mi',
        power:'Mochi',
        image:'https://64.media.tumblr.com/fbd5fabc27f01ed16f8976f714635886/tumblr_p3lveqZazZ1usyygio1_r1_540.gifv'
    },
    {
        id:47,
        name:'Bentham',
        bounty:32000000,
        level:'Queen of Newkama Land',
        qualification:'Baroque Works',
        fruit:'Mane Mane no Mi',
        power:'Akama kempo',
        image:'https://64.media.tumblr.com/7629bc418501d00ddd7b30fbb78b8fef/tumblr_mr15nkpfJo1qizslmo2_400.gifv'
    },
    {
        id:48,
        name:'Smoker',
        bounty:'No bounty',
        level:'Vice Admiral',
        qualification:'G-5',
        fruit:'Moku Moku no Mi',
        power:'Smoke',
        image:'https://64.media.tumblr.com/e2899dd7bf41f9c95e625b4080190f70/tumblr_p38d4cnxJ11usyygio1_540.gifv'
    },
    {
        id:49,
        name:'Koby',
        bounty:'No bounty',
        level:'Marine Captain',
        qualification:'Marines',
        fruit:'no fruit',
        power:'Haki',
        image:'https://64.media.tumblr.com/8b9f07233dda9ed2f6266348261c9992/039aeed2b29d0f6a-f1/s500x750/188d73c55675f829ce0767e9d985292e1f515d26.gifv'
    },
    {
        id:50,
        name:'Rob Lucci',
        bounty:'No bounty',
        level:'CP9',
        qualification:'World Government',
        fruit:'Neko Neko no Mi Model: Leopard',
        power:'Haki',
        image:'https://64.media.tumblr.com/0aa69ad5ba487b76ff68f5ba8450c79c/tumblr_nhphz89oN21u5owqfo1_500.gifv'
    },
    {
        id:51,
        name:'Sogeking',
        bounty:'100000000000',
        level:'Sniper King',
        qualification:'???',
        fruit:'no fruit',
        power:'???',
        image:'https://steamuserimages-a.akamaihd.net/ugc/534001204866554682/C4E1DD491C4A8B92E9F83C14DE85396FA182B3E3/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
    },
    {
        id:52,
        name:'Nefertari Vivi',
        bounty:'No bounty',
        level:'Princess of Arabasta',
        qualification:'Arabasta Kingdom',
        fruit:'no fruit',
        power:'no power',
        image:'https://c.tenor.com/KNX7lTO5rmQAAAAC/vivi-vivi-nefetari.gif'
    },
    {
        id:53,
        name:'Koala',
        bounty:"???",
        level:'Revolutionary',
        qualification:'Revolutionary Army',
        fruit:'no fruit',
        power:'Fish karate',
        image:'https://64.media.tumblr.com/2faeedf74487889dee2958816ce4eaf4/tumblr_o70w9xeS9t1urkrnho2_500.gifv'
    },
    {
        id:54,
        name:'God Enel',
        bounty:'No bounty',
        level:'God of Skypiea',
        qualification:'God.s Army',
        fruit:'Goro Goro no Mi',
        power:'Thunder',
        image:'https://64.media.tumblr.com/fb41b1a3f65642589ea4bbe09f1b42f3/27c6a70ca2c1901f-5a/s1280x1920/516ae070b074f9d2f511be51a4e366c83750478d.gifv'
    },
]

const container = document.querySelector('.myCard')


window.addEventListener('load' , () =>{
    if(!localStorage.getItem('nakama')){
        localStorage.setItem('nakama' , JSON.stringify(dataBase))
    }else{
        const base = JSON.parse(localStorage.getItem('nakama'))

        const newBaseWithId = base.map((item , index) =>{
            return{...item , id:index}
        })

        localStorage.setItem('nakama' , JSON.stringify([...newBaseWithId]))

        const newBase = JSON.parse(localStorage.getItem('nakama'))
        console.log(newBase);


        RenderCard(newBase)
    }


})


function RenderCard(base){
    const card = base.map(({name , bounty , level , qualification , fruit , power , image , id}) =>{
        return `
            <div class="block">
                <img src="${image}" alt="">
                <h4 class="mainText">${name}</h4>
                <div class="lineBlock"></div>
                <p>Power:  ${power}</p>
                <p>Bounty:  ${bounty}</p>
                <p>Fruit:  ${fruit}</p>
                <p>Qualification:  ${qualification}</p>
                <p>Level:  ${level}</p>
                <div class="tools">
                    <i class="fa fa-user-edit" data-id="${id}" onclick="Edit(${id})"></i>
                    <i class="fa fa-trash" data-id="${id}" onclick="Delete(${id})"></i>
                    <i class="fa fa-caret-square-down" data-id="${id}" onclick="More(${id})"></i>
                </div> 
            </div>        
              
        `
    }).join('')

    container.innerHTML = card
}

function Delete(id){
    const data = JSON.parse(localStorage.getItem('nakama'))

    const deleteUser = data.filter(item => item.id !== id)
    localStorage.setItem('nakama' , JSON.stringify([...deleteUser]))
    window.location.reload()
}



function More(id){
    const data = JSON.parse(localStorage.getItem('nakama'))
    localStorage.setItem('singleUser' , JSON.stringify([data[id]]))
    window.open('single.html' , '_self')
}






const back = document.querySelector('.back')
const kcab = document.querySelector('.kcab')
const toggle = document.querySelector('.show')

toggle.addEventListener('click' , e=>{
    e.preventDefault()

    back.classList.toggle('activeBack')
})







const searchName = document.querySelector('.searchName')
const searchQual = document.querySelector('.searchQual')


searchName.addEventListener('input' , e=>{
    var value = e.target.value.toUpperCase();

    const filtered = dataBase.filter(({name}) => name.toUpperCase().includes(value))

    RenderCard(filtered)
})


searchQual.addEventListener('input' , e=>{
    var value = e.target.value.toUpperCase();

    const filtered = dataBase.filter(({qualification}) => qualification.toUpperCase().includes(value))

    RenderCard(filtered)
})






window.addEventListener('load' , () =>{
    if(localStorage.getItem('onAuth') === 'false'){
        window.open('auth.html' , '_self')
    }else{
        return
    }
})




back.addEventListener('click' , e=>{
    e.preventDefault();

    localStorage.setItem('onAuth' , 'false')
    window.location.reload();
})
