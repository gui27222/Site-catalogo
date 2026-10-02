        
        let catalog = {

            celulares: [
                ['Smartphone Samsung', 'Smartphone samsung galaxy s24', '256GB storage', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTmYN4tsMTpI7m0om-m77FhntCkcPT-hiyai1YFjijRw&s', 4599.00],
                ['Smartphone Apple', 'Smartphone apple iphone 15', '128GB storage', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Jm_h1RdO2pXtr_XYCG_V0AxvdXbFSQ0_DnABKErTeQ&s=10', 5299.00],
                ['Smartphone Xiaomi', 'Smartphone xiaomi redmi note 13', '256GB storage', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxfkb5d-KScZJ62PYi2yHa4rI9T1VANAyJaZEixpEk7w&s=10', 1699.00],
                ['Smartphone Motorola', 'Smartphone motorola edge 50', '256GB storage', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtrubSpbdvjqD7CP-2t-eP1piAWVUPKv2IFPX5Thutqg&s=10', 3299.00],
            ],

            roteador: [
                ['Roteador Wi-Fi', 'roteador tp-link archer ax55', 'Wi-Fi 6', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1NCU_uDljjw8BoN-GdEvOK11t2ZhAz8CB5JdCtn1EBA&s', 450.00],
            ],

            monitores: [
                ['Monitor gamer', 'monitor gamer lg ultragear 27', '144Hz IPS', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7BFPTK6WYI0qhGRUHqfyYTSBo-YdMqvATqIz5J6-xg&s=10', 1399.00],
            ],
            
            armazenamentos: [
                
                ['Ssd externo', 'ssd externo kingston xs1000', '1TB SSD', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS635Pkw9OghzGiPBKKorSxfz4hSGTekECxhVf5WYGHDg&s=10', 499.00],
            ],

            notebooks: [
                ['Notebook dell 14', 'notebook dell inspiron 14', '500GB SSD', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf7-BzT6uFLKiPTUcuSXUvoblUXQGc2TcdJevuk518Sw&s=10', 4599.00],
                ['Notebook dell 17', 'notebook dell inspiron 17', '500GB SSD', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2G6pn38y4KJiO0x62gx9kRbrID-G7XrcTdv1umnyIzg&s=10', 6299.00],
                ['Notebook dell 14', 'notebook dell latitude 3440', '500GB SSD', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ8hRl77oLiXy9Mmeyy3DnCnRbxPs4q1GnfFuWCfpfyQ&s=10', 3989.00],
                ['Notebook dell 14', 'notebook dell vostro 14', '500GB SSD', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZu31nvBNhrO3EVqR2DkoxiK7QoRTidd1ElCRe10ZDA&s=10', 3149.00]
            ],

        };

const caixa = document.createElement('div');
caixa.id = 'caixinha';

let text = ['span', 'h3', 'p', 'img', 'strong'];

let pesquisa = [];

Object.keys(catalog).forEach(categoria => {
    catalog[categoria].forEach(produto => {
        const caixa2 = document.createElement('div');
        caixa2.className = 'flex_box';

        produto.forEach((valorItem, index) => {
            const dentro_caixa = document.createElement(text[index]);

            if (text[index] === 'img') {
                dentro_caixa.src = valorItem;
                dentro_caixa.width = 150;
            } else {
                // ALTERAÇÃO AQUI: Verifica se o elemento atual é a tag 'strong' (o preço)
                if (text[index] === 'strong') {
                    dentro_caixa.textContent = valorItem.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                } else {
                    dentro_caixa.textContent = valorItem;
                }
            }
            caixa2.appendChild(dentro_caixa);
        });

        caixa.appendChild(caixa2);
        
        pesquisa.push({ dados: produto, elementoHtml: caixa2 });
    });
});

document.body.appendChild(caixa);

const inputoPesquisa = document.getElementById('CIA');
inputoPesquisa.addEventListener('input', () => {
    const resultado = inputoPesquisa.value.toLowerCase().trim();

    pesquisa.forEach(item => {

        const dentro_resultado = item.dados[1].toLowerCase(); 
        
        if (dentro_resultado.includes(resultado)) {
            item.elementoHtml.style.display = '';
        } else {
            item.elementoHtml.style.display = 'none';
        }
    });
});
