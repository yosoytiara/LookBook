import { TextEncoder, TextDecoder } from 'util';
import '@testing-library/jest-dom';
// @ts-ignore
global.TextEncoder = TextEncoder;
// @ts-ignore
global.TextDecoder = TextDecoder;
