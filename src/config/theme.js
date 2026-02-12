// config/theme.js
// Centralized theme configuration - Change colors here and they'll update everywhere

export const theme = {
  // Brand Colors
  brand: {
    primary: 'green',
    secondary: 'purple',
  },
  
  // Color Shades
  colors: {
    // Primary color shades
    primary: {
      50: 'amber-50',
      100: 'amber-100',
      200: 'amber-200',
      300: 'amber-300',
      400: 'amber-400',
      500: 'amber-500',
      600: 'amber-600',
      700: 'amber-700',
      800: 'amber-800',
      900: 'amber-900',
    },
    // Secondary color shades  
    secondary: {
      50: 'orange-50',
      100: 'orange-100',
      200: 'orange-200',
      300: 'orange-300',
      400: 'orange-400',
      500: 'orange-500',
      600: 'orange-600',
      700: 'orange-700',
      800: 'orange-800',
      900: 'orange-900',
    },
    // Neutral colors
    neutral: {
      white: 'white',
      black: 'black',
      gray: {
        50: 'gray-50',
        100: 'gray-100',
        200: 'gray-200',
        300: 'gray-300',
        400: 'gray-400',
        500: 'gray-500',
        600: 'gray-600',
        700: 'gray-700',
        800: 'gray-800',
        900: 'gray-900',
      }
    }
  },

  // Background Gradients
  gradients: {
    // Header gradient
    header: 'from-amber-800 to-amber-900',
    // Footer top gradient  
    footerTop: 'from-amber-50 to-orange-50',
    // Decorative stripe
    stripe: 'from-amber-300 via-amber-500 to-amber-600',
    // Button hover
    buttonHover: 'from-amber-700 to-amber-800',
    // Card hover
    cardHover: 'from-amber-50 to-orange-50',
  },

  // Component Specific Colors
  components: {
    // Header
    header: {
      bg: 'bg-gradient-to-r from-amber-800 to-amber-900',
      text: 'text-white',
      logo: {
        primary: 'text-white',
        accent: 'text-amber-300',
        hover: 'hover:text-amber-200',
      },
      link: {
        default: 'text-white',
        hover: 'hover:text-amber-200',
      },
      button: {
        primary: 'bg-amber-600',
        hover: 'hover:bg-amber-500',
        text: 'text-white',
      },
      border: 'border-amber-600',
      stripe: 'from-amber-400 via-amber-500 to-amber-400',
    },

    // Footer
    footer: {
      bg: 'bg-gradient-to-r from-amber-50 to-orange-50',
      border: 'border-amber-200',
      title: 'text-amber-800',
      titleBorder: 'border-amber-300',
      text: 'text-amber-700',
      textDark: 'text-amber-900',
      link: 'text-amber-700 hover:text-amber-900',
      social: {
        bg: 'bg-white',
        text: 'text-amber-600',
        hover: 'hover:bg-amber-700 hover:text-white',
      },
      button: {
        primary: 'bg-amber-600',
        hover: 'hover:bg-amber-700',
        text: 'text-white',
      },
      highlight: 'bg-amber-100 text-amber-800',
      stripe: 'from-amber-300 via-amber-500 to-amber-600',
    },

    // Cart Button
    cart: {
      bg: 'bg-amber-600',
      hover: 'hover:bg-amber-500',
      text: 'text-white',
    },

    // Login Link
    login: {
      text: 'text-white',
      hover: 'hover:text-amber-200',
      icon: 'text-white',
    },

    // Buttons
    buttons: {
      primary: 'bg-amber-600 hover:bg-amber-700 text-white',
      secondary: 'bg-amber-100 text-amber-800 hover:bg-amber-200',
      danger: 'bg-red-600 hover:bg-red-700 text-white',
      success: 'bg-green-600 hover:bg-green-700 text-white',
    },

    // Cards
    cards: {
      bg: 'bg-white',
      border: 'border-gray-200',
      shadow: 'shadow-md',
      hover: 'hover:shadow-xl',
      title: 'text-gray-900',
      price: 'text-indigo-600', // You can change this to amber if preferred
    },

    // Input Fields
    input: {
      bg: 'bg-white',
      border: 'border-gray-300',
      focus: 'focus:ring-amber-500 focus:border-amber-500',
      text: 'text-gray-900',
      placeholder: 'placeholder-gray-500',
    }
  },

  // Utility Classes
  utilities: {
    // Container
    container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    // Section padding
    sectionPadding: 'py-8 px-4 sm:px-6 lg:px-8',
    // Grid layouts
    grid: {
      product: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6',
    }
  }
};

// Helper function to generate Tailwind classes
export const tw = {
  // Get header classes
  header: () => `${theme.components.header.bg} ${theme.components.header.text} ${theme.components.header.border}`,
  
  // Get footer classes
  footer: () => `${theme.components.footer.bg} ${theme.components.footer.border}`,
  
  // Get button classes
  button: (type = 'primary') => theme.components.buttons[type] || theme.components.buttons.primary,
  
  // Get cart button classes
  cartButton: () => `${theme.components.cart.bg} ${theme.components.cart.hover} ${theme.components.cart.text}`,
  
  // Get gradient stripe
  stripe: (type = 'default') => {
    if (type === 'header') return `bg-gradient-to-r ${theme.gradients.stripe}`;
    return `bg-gradient-to-r ${theme.components.footer.stripe}`;
  },
};