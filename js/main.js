document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.menu').addEventListener("click", function() {
        let menuOpen = document.querySelector('.menu-open');
        let buttons = document.querySelectorAll('.menu-open button');

        if (menuOpen.style.display === "none" || menuOpen.style.display === "") {
            menuOpen.style.display = "block";

            buttons.forEach(function(button, index) {
                button.style.display = "block"; // Сначала показываем кнопку
                button.style.opacity = 0; // Устанавливаем начальную прозрачность 0
                setTimeout(function() {
                    button.style.transition = "opacity 0.5s ease-in-out"; // Устанавливаем плавный переход
                    button.style.opacity = 1; // Устанавливаем конечную прозрачность 1
                }, (index + 1) * 100); // Увеличиваем задержку для каждой кнопки
                
                // Добавляем обработчики событий для изменения прозрачности при наведении
                button.addEventListener('mouseenter', function() {
                    button.style.opacity = 0.6;
                },10);

                button.addEventListener('mouseleave', function() {
                    button.style.opacity = 1;
                },10);
            });
        } else {
            buttons.forEach(function(button, index) {
                setTimeout(function() {
                    button.style.transition = "opacity 0.5s ease-in-out"; // Устанавливаем плавный переход
                    button.style.opacity = 0; // Устанавливаем конечную прозрачность 0
                }, (buttons.length - index - 1) * 200); // Задержка для скрытия в обратном порядке
            });

            setTimeout(function() {
                buttons.forEach(function(button) {
                    button.style.display = "none"; // Скрываем кнопки после завершения анимации
                });
                menuOpen.style.display = "none";
            }, buttons.length * 200 + 500); // Задержка + время анимации
        }
    });
});






document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.menu').addEventListener("click", function() {
        let menuOpen = document.querySelector('.menu-open-2');
        let buttons = document.querySelectorAll('.menu-open-2 button');

        if (menuOpen.style.display === "none" || menuOpen.style.display === "") {
            menuOpen.style.display = "block";

            buttons.forEach(function(button, index) {
                button.style.display = "block"; // Сначала показываем кнопку
                button.style.opacity = 0; // Устанавливаем начальную прозрачность 0
                setTimeout(function() {
                    button.style.transition = "opacity 0.5s ease-in-out"; // Устанавливаем плавный переход
                    button.style.opacity = 1; // Устанавливаем конечную прозрачность 1
                }, (index + 1) * 200); // Увеличиваем задержку для каждой кнопки
                
                // Добавляем обработчики событий для изменения прозрачности при наведении
                button.addEventListener('mouseenter', function() {
                    button.style.opacity = 0.6;
                },10);

                button.addEventListener('mouseleave', function() {
                    button.style.opacity = 1;
                },10);
            });
        } else {
            buttons.forEach(function(button, index) {
                setTimeout(function() {
                    button.style.transition = "opacity 0.5s ease-in-out"; // Устанавливаем плавный переход
                    button.style.opacity = 0; // Устанавливаем конечную прозрачность 0
                }, (buttons.length - index - 1) * 200); // Задержка для скрытия в обратном порядке
            });

            setTimeout(function() {
                buttons.forEach(function(button) {
                    button.style.display = "none"; // Скрываем кнопки после завершения анимации
                });
                menuOpen.style.display = "none";
            }, buttons.length * 200 + 500); // Задержка + время анимации
        }
    });

    

    // анимация картинок
const images = document.querySelectorAll('.redot-au, .pack-au, .phone-au'); // Select all images with relevant classes

const attractionArea = { // Define the attraction area (adjust values as needed)
  top: 50, // Top limit (pixels)
  right: window.innerWidth - 50, // Right limit (pixels from right edge)
  bottom: window.innerHeight - 50, // Bottom limit (pixels from bottom edge)
  left: 50, // Left limit (pixels)
};

document.addEventListener('mousemove', (event) => {
  const cursorX = event.clientX;
  const cursorY = event.clientY;

  images.forEach((image) => {
    // Calculate offsets based on cursor position relative to attraction area
    const offsetX = Math.min(Math.max(cursorX - attractionArea.left, 0), attractionArea.right - image.clientWidth);
    const offsetY = Math.min(Math.max(cursorY - attractionArea.top, 0), attractionArea.bottom - image.clientHeight);

    // Apply limited attraction effect
    const attractionStrength = 0.05; // Adjust for desired attraction force
    const newX = image.offsetLeft + (cursorX - (image.offsetLeft + image.clientWidth / 2)) * attractionStrength;
    const newY = image.offsetTop + (cursorY - (image.offsetTop + image.clientHeight / 2)) * attractionStrength;

    // Ensure image stays within attraction area
    image.style.left = `${Math.min(Math.max(newX, attractionArea.left), attractionArea.right)}px`;
    image.style.top = `${Math.min(Math.max(newY, attractionArea.top), attractionArea.bottom)}px`;
  });
});




const canvas = document.querySelector("#canvas-target")
    
    // module aliases
    let Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Bodies = Matter.Bodies,
        Composite = Matter.Composite,
        Mouse = Matter.Mouse,
        MouseConstraint = Matter.MouseConstraint;


    // Define the link to open
    const linkToOpen = "https://gemini.google.com/app/9c53e45a224017f4";
    
    
    
    // create an engine
    let engine = Engine.create();
    
    // create a renderer
    let render = Render.create({
        canvas: canvas,
        engine: engine,
        options: {
        background: "transparent",
        wireframes: false,
        width: window.innerWidth,
        height: window.innerHeight,
      }
    
    });
    
    
    //create objects
    const createObject = () => {
    
      let box_1 = Bodies.rectangle(200, 400, 400, 200,  
      {
      render: {
        sprite: {
          texture: "./img/IABS.png"
        }
      }
    }
    );
    
    Composite.add(engine.world, box_1);
    
    let box_2 = Bodies.rectangle(500, 250, 400, 400,  
      {
      render: {
        sprite: {
          texture: "./img/book.png"
        }
      }
    }
    );
    Composite.add(engine.world, box_2);
    
    let box_3 = Bodies.rectangle(900, 400, 200, 200,  
      {
      render: {
        sprite: {
          texture: "./img/guidebook.png"
        }
      }
    }
    );
    Composite.add(engine.world, box_3);
    
    let box_4 = Bodies.rectangle(400, 100, 200, 500,  
      {
      render: {
        sprite: {
          texture: "./img/mobileapp.png"
        }
      }
    }
    );
    Composite.add(engine.world, box_4);
    
    let box_5 = Bodies.rectangle(100, 200, 300, 300,  
      {
      render: {
        sprite: {
          texture: "./img/ph-ph.png"
        }
      }
    }
    );
    Composite.add(engine.world, box_5);
    
    }

    
    createObject();
    
    
    //create ground
    let ground = Bodies.rectangle(400, window.innerHeight-100, 3000, 1, {
        isStatic: true,
        render: {
      fillStyle: 'transparent',
    }
    });
    Composite.add(engine.world, ground);
    
    //add walls
    let leftWall = Bodies.rectangle(0, window.innerHeight / 2, 1, window.innerHeight, { isStatic: true, 
      render: {
      fillStyle: 'transparent',
    }  
    });
    let rightWall = Bodies.rectangle(window.innerWidth, window.innerHeight / 2, 1, window.innerHeight, { isStatic: true,
      render: {
      fillStyle: 'transparent',
    } });
    
    // add all of the bodies to the world
    Composite.add(engine.world, leftWall);
    Composite.add(engine.world, rightWall);
    
    // run the renderer
    Render.run(render);
    
    // create runner
    let runner = Runner.create();
    
    // run the engine
    Runner.run(runner, engine);
    let mouse = Mouse.create(render.canvas);
    let mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });
    Composite.add(engine.world, mouseConstraint);


    // Click event for arrow shop animation
  const arrowShop = document.getElementById("arrow-shop");
  const cardShopElements = document.querySelectorAll(".card-shop");

  if (arrowShop && cardShopElements.length) {
    arrowShop.addEventListener("click", function() {
      cardShopElements.forEach(cardShop => {
        cardShop.style.opacity = 0;

        setTimeout(function() {
          cardShop.style.opacity = 1;
        }, 500);
      });
    });
  } else {
    console.error("Elements not found! Check IDs and classes.");
  }

  const form = document.querySelector('.form-drag');

  form.addEventListener('mousedown', function(event) {
    event.preventDefault();  // Added to prevent default dragging behavior
  
    const shiftX = event.clientX - form.getBoundingClientRect().left;
    const shiftY = event.clientY - form.getBoundingClientRect().top;
  
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  
    function onMouseMove(event) {
      form.style.left = event.clientX - shiftX + 'px';
      form.style.top = event.clientY - shiftY + 'px';
    }
  
    function onMouseUp() {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }
  });
  


});




































