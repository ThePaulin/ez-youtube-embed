import { render, screen } from '@testing-library/react';
import {YTEmbed} from './index.tsx';

// const customOptinalValues: {attribute: string; value: any}[] = [{
//   attribute: 'allow',
//   value: 'autoplay'
// },{
//   attribute: 'height',
//   value: '400'
// },{
//   attribute: 'width',
//   value: '600'
// },{
//   attribute: 'title',
//   value: 'test-title'
// },{
//   attribute: 'allowFullScreen',
//   value: false
// },{
//   attribute: 'name',
//   value: 'test-name'
// },{
//   attribute: 'frameBorder',
//   value: '2'
// },{
//   attribute: 'referrerPolicy',
//   value: 'origin'
// }];
//



const customOptinalValues = [[
  'allow',
  'autoplay'
],[
  'height',
  '400'
],[
   'width',
   '600'
],[
   'title',
   'test-title'
],[
   'allowFullScreen',
   null
],[
   'name',
   'test-name'
],[
   'frameBorder',
   '2'
],[
   'referrerPolicy',
   'origin'
]];

/**
 * 
  width?: string | number;
  height?: string | number;
  title?: string;
  allow?: string;
  allowFullScreen?: boolean;
  frameBorder?: string | number;
  name?: string;
  sandbox?: string;
  srcDoc?: string;
  loading?: 'eager' | 'lazy';
  frameBorder?: string | number;
  referrerPolicy?: string;
* */

const testUrl: string = "https://www.youtube.com/watch?v=mmqDYw9C30I&t=344s&ab_channel=JoseanMartinez";
describe('YTEmbed', () => {
  // Test 1: Renders with required prop only
  it('renders with required prop', () => {
    render(<YTEmbed url={testUrl} />);
    const element = screen.getByTestId('yt-embed');
    expect(element).toBeInTheDocument();
    // expect(element).toHaveTextContent('Hello');
  });

  // Test 2: Renders with all props
  it('renders with all optional correctly', () => {
    render(
      <YTEmbed
        url={testUrl}
      />
    );
    const element = screen.getByTestId('yt-embed');() => { second }

    // testing some of the optional props for default values
    expect(element.getAttribute('allow')).toBe("accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
    expect(element.getAttribute('title')).toBe("YouTube video player");

  });


  // Test 3: uses customOptinalValues 
  
  it.each([...customOptinalValues])('renders with custom %s', (a, expectedValue)=> {
    const props = {};
    props[a] = expectedValue;
    render(<YTEmbed url={testUrl} {...props}  />);
    expect(screen.getByTestId('yt-embed').getAttribute(a)).toBe(expectedValue);
  });


  //
  // // Test 3: Uses default props when optional props are omitted
  // it('applies default props', () => {
  //   render(<YTEmbed url={testUrl} />);
  //   const element = screen.getByTestId('yt-embed');
  //   expect(element).toHaveStyle({
  //     color: 'black',
  //     fontSize: '16px',
  //     opacity: 1,
  //   });
  // });
  //
  // // Test 4: Snapshot test
  // it('matches snapshot', () => {
  //   const { asFragment } = render(<YTEmbed url={testUrl} />);
  //   expect(asFragment()).toMatchSnapshot();
  // });
  //
  // // Test 5: Edge case - different optionalSize values
  // it.each([
  //   ['small', '12px'],
  //   ['medium', '16px'],
  //   ['large', '20px'],
  // ])('renders with optionalSize %s', (size, expectedFontSize) => {
  //   render(<YTEmbed url={testUrl} optionalSize={size as 'small' | 'medium' | 'large'} />);
  //   expect(screen.getByTestId('yt-embed')).toHaveStyle({ fontSize: expectedFontSize });
  // });
});
