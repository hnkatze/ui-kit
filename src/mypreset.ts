//mypreset.ts
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '#e6f3ff',
            100: '#b3daff',
            200: '#80c1ff',
            300: '#4da8ff',
            400: '#1a8fff',
            500: '#0066ff', // Azul eléctrico vibrante
            600: '#0052cc',
            700: '#003d99',
            800: '#002966',
            900: '#001433',
            950: '#000a1a'
        },
        success: {
            color: '#00d68f',
            contrastColor: '#ffffff',
            hoverColor: '#00b074',
            activeColor: '#009a5c'
        },
        info: {
            color: '#00b8d4',
            contrastColor: '#ffffff',
            hoverColor: '#0096a8',
            activeColor: '#00747c'
        },
        warn: {
            color: '#ff9500',
            contrastColor: '#ffffff',
            hoverColor: '#ff7b00',
            activeColor: '#e56f00'
        },
        danger: {
            color: '#ff1744',
            contrastColor: '#ffffff',
            hoverColor: '#e6002c',
            activeColor: '#cc0014'
        },
        colorScheme: {
            light: {
                primary: {
                    color: '#0066ff',
                    inverseColor: '#ffffff',
                    hoverColor: '#0052cc',
                    activeColor: '#003d99'
                },
                highlight: {
                    background: '#e6f3ff',
                    focusBackground: '#b3daff',
                    color: '#0052cc',
                    focusColor: '#003d99'
                },
                surface: {
                    0: '#ffffff',
                    50: '{slate.50}',
                    100: '{slate.100}',
                    200: '{slate.200}',
                    300: '{slate.300}',
                    400: '{slate.400}',
                    500: '{slate.500}',
                    600: '{slate.600}',
                    700: '{slate.700}',
                    800: '{slate.800}',
                    900: '{slate.900}',
                    950: '{slate.950}'
                },
                text: {
                    color: '#333333',
                    hoverColor: '#000000',
                    mutedColor: '#666666',
                    hoverMutedColor: '#333333'
                },
                content: {
                    background: '#ffffff',
                    hoverBackground: '#f8f9fa',
                    borderColor: '#dee2e6',
                    color: '#333333',
                    hoverColor: '#000000'
                },
                mask: {
                    background: 'rgba(0,0,0,0.4)',
                    color: '#333333'
                },
                formField: {
                    background: '#ffffff',
                    disabledBackground: '#f8f9fa',
                    filledBackground: '#f8f9fa',
                    filledHoverBackground: '#f1f3f5',
                    borderColor: '#ced4da',
                    hoverBorderColor: '#80c1ff',
                    focusBorderColor: '#0066ff',
                    invalidBorderColor: '#ff1744',
                    color: '#333333',
                    disabledColor: '#6c757d',
                    placeholderColor: '#999999',
                    invalidPlaceholderColor: '#ff1744'
                }
            },
            dark: {
                primary: {
                    color: '#4da8ff',
                    inverseColor: '#1a1a1a',
                    hoverColor: '#80c1ff',
                    activeColor: '#b3daff'
                },
                highlight: {
                    background: 'rgba(0, 102, 255, 0.16)',
                    focusBackground: 'rgba(0, 102, 255, 0.24)',
                    color: '#b3daff',
                    focusColor: '#e6f3ff'
                },
                surface: {
                    0: '#09090b',
                    50: '{slate.950}',
                    100: '{slate.900}',
                    200: '{slate.800}',
                    300: '{slate.700}',
                    400: '{slate.600}',
                    500: '{slate.500}',
                    600: '{slate.400}',
                    700: '{slate.300}',
                    800: '{slate.200}',
                    900: '{slate.100}',
                    950: '{slate.50}'
                }
            }
        }
    }
});

export default MyPreset;
