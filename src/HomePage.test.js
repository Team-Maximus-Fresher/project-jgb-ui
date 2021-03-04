// import { shallow } from "enzyme";
// import HomePage from "../components/Homepage";
// import Button from '@material-ui/core/Button';

// describe('HomePage' , () => {
//     it ('renders correctly', ()=>{
//         const wrapper = shallow(<HomePage />);
//         expect(wrapper).toMatchSnapshot();
//     });
// });

// describe('HomePage', () => {
//     describe('when user clicks button', () => {
//       it ('calls correct function to save the information', () => {
//         const onSubmitClickMock = jest.fn();
//         const wrapper = shallow(
//           <HomePage
//             onSubmitClickMock={onButtonClickMock}
//           />,
//         );
//         const buttonElement = wrapper.find('Button');
//         buttonElement.simulate('click');

//         expect(onSubmitClickMock).toHaveBeenCalledTimes(1);
//         expect(onSubmitClickMock).toHaveBeenCalledWith(true);
//       });
//     });
//   });

// describe('HomePage', () => {
//     it('renders correctly', () => {
//       const wrapper = shallow(
//         <HomePage
//           productCode={'PERSONAL'}
//         />,
//       );
//       expect(wrapper).toMatchSnapshot();
//     });
//   });

// describe('HomePage', () => {
//     it('renders correctly', () => {
//       const wrapper = shallow(
//         <HomePage
//           customerId={"840000016"}
//         />,
//       );
//       expect(wrapper).toMatchSnapshot();
//     });
//   });


// describe('HomePage', () => {
//   it('renders correctly', () => {
//     const tree = renderer
//       .create(<Image src="https://miro.medium.com/max/1600/1*T5j7aqOF32G2eSR1HwnUvg.jpeg"></Image>)
//       .toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });

// describe('HomePage', () => {
//     it('renders correctly', () => {
//       const tree = renderer
//         .create(<Image src="https://i.pinimg.com/474x/ef/bb/54/efbb54d31f5ae7c4cd4b24bfd05a5f77.jpg"></Image>)
//         .toJSON();
//       expect(tree).toMatchSnapshot();
//     });
//   });

// test('HomePage', () => {
//     const component = shallow(<HomePage/>);
//     const insideComponent = component.find('.HomePage')
//     expect(insideComponent.length).toBe(1);
// })

// test('Search by Customer Id', () => {
//     render(<HomePage/>);
//     const linkElement = screen.getByText(/Search By Customer Id/i);
//     expect(linkElement).toBeInTheDocument();
// });

// test('Search by Application Id', () => {
//     render(<HomePage/>);
//     const linkElement = screen.getByText(/Search By Application Id/i);
//     expect(linkElement).toBeInTheDocument();
// });
