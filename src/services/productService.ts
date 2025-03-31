
import { Product } from '@/components/ProductCard';

// Mock product data
const products: Product[] = [
  {
    id: 1,
    name: "Arduino Uno R3 Microcontroller Board",
    category: "Microcontrollers",
    price: 28000,
    image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    stock: 25,
    description: "The Arduino Uno R3 is a microcontroller board based on the ATmega328P. It has 14 digital input/output pins, 6 analog inputs, a 16 MHz ceramic resonator, a USB connection, a power jack, an ICSP header, and a reset button."
  },
  {
    id: 2,
    name: "Raspberry Pi 4 Model B 4GB RAM",
    category: "Microcontrollers",
    price: 85000,
    image: "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    stock: 15,
    description: "The Raspberry Pi 4 Model B is the latest product in the popular Raspberry Pi range of computers. It offers ground-breaking increases in processor speed, multimedia performance, memory, and connectivity compared to the prior generation."
  },
  {
    id: 3,
    name: "DHT22 Temperature and Humidity Sensor",
    category: "Sensors",
    price: 12000,
    image: "https://images.unsplash.com/photo-1597415581425-4f7ec0276e7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    stock: 50,
    description: "The DHT22 is a basic, low-cost digital temperature and humidity sensor. It uses a capacitive humidity sensor and a thermistor to measure the surrounding air, and spits out a digital signal on the data pin."
  },
  {
    id: 4,
    name: "16x2 LCD Display Module with I2C Interface",
    category: "Displays",
    price: 8500,
    image: "https://images.unsplash.com/photo-1614633833026-0820552978b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    stock: 30,
    description: "This is a 16x2 LCD display module with I2C interface. It has a blue backlight with white characters. The I2C interface reduces the number of pins needed to connect to a microcontroller from 6 to just 2."
  },
  {
    id: 5,
    name: "ESP32 WiFi & Bluetooth Module",
    category: "Microcontrollers",
    price: 15000,
    image: "https://images.unsplash.com/photo-1557855319-43f5a3901183?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    stock: 20,
    description: "The ESP32 is a low-cost, low-power system on a chip (SoC) series with Wi-Fi and Bluetooth capabilities. It integrates features like dual high-performance cores, various peripherals, and supports both Wi-Fi and Bluetooth connectivity."
  },
  {
    id: 6,
    name: "HC-SR04 Ultrasonic Distance Sensor",
    category: "Sensors",
    price: 5000,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    stock: 40,
    description: "The HC-SR04 ultrasonic sensor uses sonar to determine distance to an object like bats do. It offers excellent non-contact range detection with high accuracy and stable readings in an easy-to-use package."
  },
  {
    id: 7,
    name: "0.96 inch OLED Display Module",
    category: "Displays",
    price: 9500,
    image: "https://images.unsplash.com/photo-1573027087809-d9e5b8c3c9c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    stock: 25,
    description: "This is a 0.96 inch OLED display module with 128x64 pixels. It uses I2C communication protocol and requires only two pins to connect to a microcontroller. The display is bright and has high contrast."
  },
  {
    id: 8,
    name: "MPU6050 6-Axis Accelerometer and Gyroscope",
    category: "Sensors",
    price: 7500,
    image: "https://images.unsplash.com/photo-1573027087529-c6b5d8066568?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    stock: 35,
    description: "The MPU6050 is a 6-axis motion tracking device that combines a 3-axis gyroscope and a 3-axis accelerometer on the same silicon die, together with an onboard Digital Motion Processor (DMP)."
  },
  {
    id: 9,
    name: "40-Pin Female to Female Jumper Wires",
    category: "Connectors",
    price: 3000,
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    stock: 100,
    description: "These female to female jumper wires are perfect for making connections between pins on breadboards, development boards, and other electronic components. The pack includes 40 multicolored wires."
  },
  {
    id: 10,
    name: "MG996R Metal Gear Servo Motor",
    category: "Motors",
    price: 11000,
    image: "https://images.unsplash.com/photo-1607434472257-d9f8e57a643d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    stock: 20,
    description: "The MG996R is a metal gear servo motor with high torque, suitable for various robotics applications. It can rotate approximately 120 degrees (60 in each direction) and works with standard servo code and hardware."
  },
  {
    id: 11,
    name: "5V 2-Channel Relay Module",
    category: "Components",
    price: 6500,
    image: "https://images.unsplash.com/photo-1580254045099-99d5e6fa9077?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    stock: 30,
    description: "This 5V 2-Channel Relay Module is perfect for switching high voltage devices using a low voltage control signal from a microcontroller. It features optocoupler isolation for safety."
  },
  {
    id: 12,
    name: "Breadboard 830 Point Solderless PCB",
    category: "Components",
    price: 4500,
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    stock: 50,
    description: "This 830 point solderless breadboard is perfect for prototyping electronic circuits without soldering. It has 630 tie points and 200 power/ground tie points, with a power rail on each side."
  }
];

// Get all products
export const getAllProducts = (): Product[] => {
  return products;
};

// Get a product by ID
export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

// Search products
export const searchProducts = (query: string): Product[] => {
  const searchTerms = query.toLowerCase().trim().split(/\s+/);
  
  return products.filter(product => {
    const searchableText = `${product.name.toLowerCase()} ${product.category.toLowerCase()} ${product.description.toLowerCase()}`;
    return searchTerms.every(term => searchableText.includes(term));
  });
};

// Filter products by category
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  );
};

// Get featured products (for example, the 4 most expensive ones)
export const getFeaturedProducts = (): Product[] => {
  return [...products]
    .sort((a, b) => b.price - a.price)
    .slice(0, 4);
};

// Get all categories with their counts
export const getCategories = (): { name: string, count: number, image: string }[] => {
  const categoryMap = products.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) {
      acc[category] = {
        name: category,
        count: 0,
        image: product.image
      };
    }
    acc[category].count++;
    return acc;
  }, {} as Record<string, { name: string, count: number, image: string }>);

  return Object.values(categoryMap);
};
