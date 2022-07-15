const target1 = document.querySelector('.div1');
const target2 = document.querySelector('.div2');
const target3 = document.querySelector('.div3');
const target4 = document.querySelector('.s14');

const btn1 = document.getElementById('thumb1');
const btn2 = document.getElementById('thumb2');
const btn3 = document.getElementById('thumb3');

const btn4 = document.querySelector('.s1');
const btn5 = document.querySelector('.s2');
const btn6 = document.querySelector('.s3');

const shopImg = document.querySelector('.s4');

let pack1 = document.getElementById('s5');
let pack2 = document.getElementById('s6');
let pack3 = document.getElementById('s7');


let firstView = true;
let viewState1 = false;
let viewState2 = true;
let viewState3 = true;


btn4.addEventListener('click', function () {

    btn4.src = './images/s11.png';
    btn5.src = './images/s2.png';
    btn6.src = './images/s3.png';

    shopImg.src = './images/sl2.png'

});

btn5.addEventListener('click', function () {

    btn4.src = './images/s1.png';
    btn5.src = './images/s12.png';
    btn6.src = './images/s3.png';

    shopImg.src = './images/sl1.png'

});

btn6.addEventListener('click', function () {

    btn4.src = './images/s1.png';
    btn5.src = './images/s2.png';
    btn6.src = './images/s13.png';

    shopImg.src = './images/sl3.png'

});

btn1.addEventListener('click', function () {
    target1.style.display = 'block';
    target2.style.display = 'none';
    target3.style.display = 'none';

    // pack1.src = './images/s8.png';
    // pack2.src = './images/s6.png';
    // pack3.src = './images/s7.png';

    pack1.style.border = 'solid 2.3px grey';
    pack2.style.border = 'solid 2.3px white';
    pack3.style.border = 'solid 2.3px white';

    target4.src = './images/s14.svg';
    shopImg.src = './images/sl2.png';


    if (viewState1) {

        (function () {
            var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
            if (window.ShopifyBuy) {
                if (window.ShopifyBuy.UI) {
                    ShopifyBuyInit();
                } else {
                    loadScript();
                }
            } else {
                loadScript();
            }
            function loadScript() {
                var script = document.createElement('script');
                script.async = true;
                script.src = scriptURL;
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
                script.onload = ShopifyBuyInit;
            }
            function ShopifyBuyInit() {
                var client = ShopifyBuy.buildClient({
                    domain: 'hashtagapp.myshopify.com',
                    storefrontAccessToken: '71bc3b27c9f2709c3aad5b3750e6ad5c',
                });
                ShopifyBuy.UI.onReady(client).then(function (ui) {
                    ui.createComponent('product', {
                        id: '7791647555814',
                        node: document.getElementById('product-component-1653049043446'),
                        moneyFormat: 'Rs.%20%7B%7Bamount%7D%7D',
                        options: {
                            "product": {
                                "styles": {
                                    "product": {
                                        "@media (min-width: 601px)": {
                                            "max-width": "calc(25% - 20px)",
                                            "margin-left": "20px",
                                            "margin-bottom": "50px"
                                        }
                                    },
                                    "button": {
                                        "font-family": "Roboto, sans-serif",
                                        "font-size": "14px",
                                        "padding-top": "15px",
                                        "padding-bottom": "15px",
                                        ":hover": {
                                            "background-color": "#d60808"
                                        },
                                        "background-color": "#ee0909",
                                        ":focus": {
                                            "background-color": "#d60808"
                                        },
                                        "border-radius": "40px"
                                    },
                                    "quantityInput": {
                                        "font-size": "14px",
                                        "padding-top": "15px",
                                        "padding-bottom": "15px"
                                    }
                                },
                                "contents": {
                                    "img": false,
                                    "title": false,
                                    "price": false
                                },
                                "text": {
                                    "button": "Add to cart"
                                },
                                "googleFonts": [
                                    "Roboto"
                                ]
                            },
                            "productSet": {
                                "styles": {
                                    "products": {
                                        "@media (min-width: 601px)": {
                                            "margin-left": "-20px"
                                        }
                                    }
                                }
                            },
                            "modalProduct": {
                                "contents": {
                                    "img": false,
                                    "imgWithCarousel": true,
                                    "button": false,
                                    "buttonWithQuantity": true
                                },
                                "styles": {
                                    "product": {
                                        "@media (min-width: 601px)": {
                                            "max-width": "100%",
                                            "margin-left": "0px",
                                            "margin-bottom": "0px"
                                        }
                                    },
                                    "button": {
                                        "font-family": "Roboto, sans-serif",
                                        "font-size": "14px",
                                        "padding-top": "15px",
                                        "padding-bottom": "15px",
                                        ":hover": {
                                            "background-color": "#d60808"
                                        },
                                        "background-color": "#ee0909",
                                        ":focus": {
                                            "background-color": "#d60808"
                                        },
                                        "border-radius": "40px"
                                    },
                                    "quantityInput": {
                                        "font-size": "14px",
                                        "padding-top": "15px",
                                        "padding-bottom": "15px"
                                    }
                                },
                                "googleFonts": [
                                    "Roboto"
                                ],
                                "text": {
                                    "button": "Add to cart"
                                }
                            },
                            "option": {},
                            "cart": {
                                "styles": {
                                    "button": {
                                        "font-family": "Roboto, sans-serif",
                                        "font-size": "14px",
                                        "padding-top": "15px",
                                        "padding-bottom": "15px",
                                        ":hover": {
                                            "background-color": "#d60808"
                                        },
                                        "background-color": "#ee0909",
                                        ":focus": {
                                            "background-color": "#d60808"
                                        },
                                        "border-radius": "40px"
                                    }
                                },
                                "text": {
                                    "title": "MasterTag Cart",
                                    "total": "Subtotal",
                                    "empty": "You have no MasterTags in your cart.",
                                    "notice": "Pre-order your MasterTag now for FREE",
                                    "button": "Checkout"
                                },
                                "googleFonts": [
                                    "Roboto"
                                ]
                            },
                            "toggle": {
                                "styles": {
                                    "toggle": {
                                        "font-family": "Roboto, sans-serif",
                                        "background-color": "#ee0909",
                                        ":hover": {
                                            "background-color": "#d60808"
                                        },
                                        ":focus": {
                                            "background-color": "#d60808"
                                        }
                                    },
                                    "count": {
                                        "font-size": "14px"
                                    }
                                },
                                "googleFonts": [
                                    "Roboto"
                                ]
                            }
                        },
                    });
                });
            }
        })();

    }
    firstView = false;
    viewState1 = false;


});



btn2.addEventListener('click', function () {
    target1.style.display = 'none';
    target2.style.display = 'block';
    target3.style.display = 'none';

    // pack1.src = './images/s5.png';
    // pack2.src = './images/s9.png';
    // pack3.src = './images/s7.png';

    pack2.style.border = 'solid 2.3px grey';
    pack1.style.border = 'solid 2.3px white';
    pack3.style.border = 'solid 2.3px white';

    target4.src = './images/s15.svg';
    shopImg.src = './images/sl4.png';



    if (viewState2) {

        (function () {
            var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
            if (window.ShopifyBuy) {
                if (window.ShopifyBuy.UI) {
                    ShopifyBuyInit();
                } else {
                    loadScript();
                }
            } else {
                loadScript();
            }
            function loadScript() {
                var script = document.createElement('script');
                script.async = true;
                script.src = scriptURL;
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
                script.onload = ShopifyBuyInit;
            }
            function ShopifyBuyInit() {
                var client = ShopifyBuy.buildClient({
                    domain: 'hashtagapp.myshopify.com',
                    storefrontAccessToken: '71bc3b27c9f2709c3aad5b3750e6ad5c',
                });
                ShopifyBuy.UI.onReady(client).then(function (ui) {
                    ui.createComponent('product', {
                        id: '7791749333222',
                        node: document.getElementById('product-component-1653049276602'),
                        moneyFormat: 'Rs.%20%7B%7Bamount%7D%7D',
                        options: {
                            "product": {
                                "styles": {
                                    "product": {
                                        "@media (min-width: 601px)": {
                                            "max-width": "calc(25% - 20px)",
                                            "margin-left": "20px",
                                            "margin-bottom": "50px"
                                        }
                                    },
                                    "button": {
                                        "font-family": "Roboto, sans-serif",
                                        "font-size": "14px",
                                        "padding-top": "15px",
                                        "padding-bottom": "15px",
                                        ":hover": {
                                            "background-color": "#d60808"
                                        },
                                        "background-color": "#ee0909",
                                        ":focus": {
                                            "background-color": "#d60808"
                                        },
                                        "border-radius": "40px"
                                    },
                                    "quantityInput": {
                                        "font-size": "14px",
                                        "padding-top": "15px",
                                        "padding-bottom": "15px"
                                    }
                                },
                                "contents": {
                                    "img": false,
                                    "title": false,
                                    "price": false
                                },
                                "text": {
                                    "button": "Add to cart"
                                },
                                "googleFonts": [
                                    "Roboto"
                                ]
                            },
                            "productSet": {
                                "styles": {
                                    "products": {
                                        "@media (min-width: 601px)": {
                                            "margin-left": "-20px"
                                        }
                                    }
                                }
                            },
                            "modalProduct": {
                                "contents": {
                                    "img": false,
                                    "imgWithCarousel": true,
                                    "button": false,
                                    "buttonWithQuantity": true
                                },
                                "styles": {
                                    "product": {
                                        "@media (min-width: 601px)": {
                                            "max-width": "100%",
                                            "margin-left": "0px",
                                            "margin-bottom": "0px"
                                        }
                                    },
                                    "button": {
                                        "font-family": "Roboto, sans-serif",
                                        "font-size": "14px",
                                        "padding-top": "15px",
                                        "padding-bottom": "15px",
                                        ":hover": {
                                            "background-color": "#d60808"
                                        },
                                        "background-color": "#ee0909",
                                        ":focus": {
                                            "background-color": "#d60808"
                                        },
                                        "border-radius": "40px"
                                    },
                                    "quantityInput": {
                                        "font-size": "14px",
                                        "padding-top": "15px",
                                        "padding-bottom": "15px"
                                    }
                                },
                                "googleFonts": [
                                    "Roboto"
                                ],
                                "text": {
                                    "button": "Add to cart"
                                }
                            },
                            "option": {},
                            "cart": {
                                "styles": {
                                    "button": {
                                        "font-family": "Roboto, sans-serif",
                                        "font-size": "14px",
                                        "padding-top": "15px",
                                        "padding-bottom": "15px",
                                        ":hover": {
                                            "background-color": "#d60808"
                                        },
                                        "background-color": "#ee0909",
                                        ":focus": {
                                            "background-color": "#d60808"
                                        },
                                        "border-radius": "40px"
                                    }
                                },
                                "text": {
                                    "title": "MasterTag Cart",
                                    "total": "Subtotal",
                                    "empty": "You have no MasterTags in your cart.",
                                    "notice": "Pre-order your MasterTag now for FREE",
                                    "button": "Checkout"
                                },
                                "googleFonts": [
                                    "Roboto"
                                ]
                            },
                            "toggle": {
                                "styles": {
                                    "toggle": {
                                        "font-family": "Roboto, sans-serif",
                                        "background-color": "#ee0909",
                                        ":hover": {
                                            "background-color": "#d60808"
                                        },
                                        ":focus": {
                                            "background-color": "#d60808"
                                        }
                                    },
                                    "count": {
                                        "font-size": "14px"
                                    }
                                },
                                "googleFonts": [
                                    "Roboto"
                                ]
                            }
                        },
                    });
                });
            }
        })();

    }

    firstView = false;
    viewState2 = false;


});

btn3.addEventListener('click', function () {
    target1.style.display = 'none';
    target2.style.display = 'none';
    target3.style.display = 'block';

    // pack1.src = './images/s5.png';
    // pack2.src = './images/s6.png';
    // pack3.src = './images/s10.png';

    pack3.style.border = 'solid 2.3px grey';
    pack1.style.border = 'solid 2.3px white';
    pack2.style.border = 'solid 2.3px white';

    target4.src = './images/s16.svg';
    shopImg.src = './images/sl5.png';



    if (viewState3) {

        (function () {
            var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
            if (window.ShopifyBuy) {
                if (window.ShopifyBuy.UI) {
                    ShopifyBuyInit();
                } else {
                    loadScript();
                }
            } else {
                loadScript();
            }
            function loadScript() {
                var script = document.createElement('script');
                script.async = true;
                script.src = scriptURL;
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
                script.onload = ShopifyBuyInit;
            }
            function ShopifyBuyInit() {
                var client = ShopifyBuy.buildClient({
                    domain: 'hashtagapp.myshopify.com',
                    storefrontAccessToken: '71bc3b27c9f2709c3aad5b3750e6ad5c',
                });
                ShopifyBuy.UI.onReady(client).then(function (ui) {
                    ui.createComponent('product', {
                        id: '7791767716070',
                        node: document.getElementById('product-component-1653049382577'),
                        moneyFormat: 'Rs.%20%7B%7Bamount%7D%7D',
                        options: {
                            "product": {
                                "styles": {
                                    "product": {
                                        "@media (min-width: 601px)": {
                                            "max-width": "calc(25% - 20px)",
                                            "margin-left": "20px",
                                            "margin-bottom": "50px"
                                        }
                                    },
                                    "button": {
                                        "font-family": "Roboto, sans-serif",
                                        "font-size": "14px",
                                        "padding-top": "15px",
                                        "padding-bottom": "15px",
                                        ":hover": {
                                            "background-color": "#d60808"
                                        },
                                        "background-color": "#ee0909",
                                        ":focus": {
                                            "background-color": "#d60808"
                                        },
                                        "border-radius": "40px"
                                    },
                                    "quantityInput": {
                                        "font-size": "14px",
                                        "padding-top": "15px",
                                        "padding-bottom": "15px"
                                    }
                                },
                                "contents": {
                                    "img": false,
                                    "title": false,
                                    "price": false
                                },
                                "text": {
                                    "button": "Add to cart"
                                },
                                "googleFonts": [
                                    "Roboto"
                                ]
                            },
                            "productSet": {
                                "styles": {
                                    "products": {
                                        "@media (min-width: 601px)": {
                                            "margin-left": "-20px"
                                        }
                                    }
                                }
                            },
                            "modalProduct": {
                                "contents": {
                                    "img": false,
                                    "imgWithCarousel": true,
                                    "button": false,
                                    "buttonWithQuantity": true
                                },
                                "styles": {
                                    "product": {
                                        "@media (min-width: 601px)": {
                                            "max-width": "100%",
                                            "margin-left": "0px",
                                            "margin-bottom": "0px"
                                        }
                                    },
                                    "button": {
                                        "font-family": "Roboto, sans-serif",
                                        "font-size": "14px",
                                        "padding-top": "15px",
                                        "padding-bottom": "15px",
                                        ":hover": {
                                            "background-color": "#d60808"
                                        },
                                        "background-color": "#ee0909",
                                        ":focus": {
                                            "background-color": "#d60808"
                                        },
                                        "border-radius": "40px"
                                    },
                                    "quantityInput": {
                                        "font-size": "14px",
                                        "padding-top": "15px",
                                        "padding-bottom": "15px"
                                    }
                                },
                                "googleFonts": [
                                    "Roboto"
                                ],
                                "text": {
                                    "button": "Add to cart"
                                }
                            },
                            "option": {},
                            "cart": {
                                "styles": {
                                    "button": {
                                        "font-family": "Roboto, sans-serif",
                                        "font-size": "14px",
                                        "padding-top": "15px",
                                        "padding-bottom": "15px",
                                        ":hover": {
                                            "background-color": "#d60808"
                                        },
                                        "background-color": "#ee0909",
                                        ":focus": {
                                            "background-color": "#d60808"
                                        },
                                        "border-radius": "40px"
                                    }
                                },
                                "text": {
                                    "title": "MasterTag Cart",
                                    "total": "Subtotal",
                                    "empty": "You have no MasterTags in your cart.",
                                    "notice": "Pre-order your MasterTag now for FREE",
                                    "button": "Checkout"
                                },
                                "googleFonts": [
                                    "Roboto"
                                ]
                            },
                            "toggle": {
                                "styles": {
                                    "toggle": {
                                        "font-family": "Roboto, sans-serif",
                                        "background-color": "#ee0909",
                                        ":hover": {
                                            "background-color": "#d60808"
                                        },
                                        ":focus": {
                                            "background-color": "#d60808"
                                        }
                                    },
                                    "count": {
                                        "font-size": "14px"
                                    }
                                },
                                "googleFonts": [
                                    "Roboto"
                                ]
                            }
                        },
                    });
                });
            }
        })();

    }

    firstView = false;
    viewState3 = false;


});


if (firstView) {

    (function () {
        var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
        if (window.ShopifyBuy) {
            if (window.ShopifyBuy.UI) {
                ShopifyBuyInit();
            } else {
                loadScript();
            }
        } else {
            loadScript();
        }
        function loadScript() {
            var script = document.createElement('script');
            script.async = true;
            script.src = scriptURL;
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
            script.onload = ShopifyBuyInit;
        }
        function ShopifyBuyInit() {
            var client = ShopifyBuy.buildClient({
                domain: 'hashtagapp.myshopify.com',
                storefrontAccessToken: '71bc3b27c9f2709c3aad5b3750e6ad5c',
            });
            ShopifyBuy.UI.onReady(client).then(function (ui) {
                ui.createComponent('product', {
                    id: '7791647555814',
                    node: document.getElementById('product-component-1653049043446'),
                    moneyFormat: 'Rs.%20%7B%7Bamount%7D%7D',
                    options: {
                        "product": {
                            "styles": {
                                "product": {
                                    "@media (min-width: 601px)": {
                                        "max-width": "calc(25% - 20px)",
                                        "margin-left": "20px",
                                        "margin-bottom": "50px"
                                    }
                                },
                                "button": {
                                    "font-family": "Roboto, sans-serif",
                                    "font-size": "14px",
                                    "padding-top": "15px",
                                    "padding-bottom": "15px",
                                    ":hover": {
                                        "background-color": "#d60808"
                                    },
                                    "background-color": "#ee0909",
                                    ":focus": {
                                        "background-color": "#d60808"
                                    },
                                    "border-radius": "40px"
                                },
                                "quantityInput": {
                                    "font-size": "14px",
                                    "padding-top": "15px",
                                    "padding-bottom": "15px"
                                }
                            },
                            "contents": {
                                "img": false,
                                "title": false,
                                "price": false
                            },
                            "text": {
                                "button": "Add to cart"
                            },
                            "googleFonts": [
                                "Roboto"
                            ]
                        },
                        "productSet": {
                            "styles": {
                                "products": {
                                    "@media (min-width: 601px)": {
                                        "margin-left": "-20px"
                                    }
                                }
                            }
                        },
                        "modalProduct": {
                            "contents": {
                                "img": false,
                                "imgWithCarousel": true,
                                "button": false,
                                "buttonWithQuantity": true
                            },
                            "styles": {
                                "product": {
                                    "@media (min-width: 601px)": {
                                        "max-width": "100%",
                                        "margin-left": "0px",
                                        "margin-bottom": "0px"
                                    }
                                },
                                "button": {
                                    "font-family": "Roboto, sans-serif",
                                    "font-size": "14px",
                                    "padding-top": "15px",
                                    "padding-bottom": "15px",
                                    ":hover": {
                                        "background-color": "#d60808"
                                    },
                                    "background-color": "#ee0909",
                                    ":focus": {
                                        "background-color": "#d60808"
                                    },
                                    "border-radius": "40px"
                                },
                                "quantityInput": {
                                    "font-size": "14px",
                                    "padding-top": "15px",
                                    "padding-bottom": "15px"
                                }
                            },
                            "googleFonts": [
                                "Roboto"
                            ],
                            "text": {
                                "button": "Add to cart"
                            }
                        },
                        "option": {},
                        "cart": {
                            "styles": {
                                "button": {
                                    "font-family": "Roboto, sans-serif",
                                    "font-size": "14px",
                                    "padding-top": "15px",
                                    "padding-bottom": "15px",
                                    ":hover": {
                                        "background-color": "#d60808"
                                    },
                                    "background-color": "#ee0909",
                                    ":focus": {
                                        "background-color": "#d60808"
                                    },
                                    "border-radius": "40px"
                                }
                            },
                            "text": {
                                "title": "MasterTag Cart",
                                "total": "Subtotal",
                                "empty": "You have no MasterTags in your cart.",
                                "notice": "Pre-order your MasterTag now for FREE",
                                "button": "Checkout"
                            },
                            "googleFonts": [
                                "Roboto"
                            ]
                        },
                        "toggle": {
                            "styles": {
                                "toggle": {
                                    "font-family": "Roboto, sans-serif",
                                    "background-color": "#ee0909",
                                    ":hover": {
                                        "background-color": "#d60808"
                                    },
                                    ":focus": {
                                        "background-color": "#d60808"
                                    }
                                },
                                "count": {
                                    "font-size": "14px"
                                }
                            },
                            "googleFonts": [
                                "Roboto"
                            ]
                        }
                    },
                });
            });
        }
    })();


};


