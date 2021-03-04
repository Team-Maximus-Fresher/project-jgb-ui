import { shallow } from "enzyme";
import { HomePageCard } from "../components/HomePageCard";

describe('HomePageCard', () => {
    describe('when user clicks button', () => {
            it ('calls correct function to save the information', () => {
                const onSubmitClickMock = jest.fn();
                const wrapper = shallow(
                <HomePageCard
                    onSubmitClickMock={onButtonClickMock}
                />,
                );
                const buttonElement = wrapper.find('Button');
                buttonElement.simulate('click');

                expect(onSubmitClickMock).toHaveBeenCalledTimes(1);
                expect(onSubmitClickMock).toHaveBeenCalledWith(true);
            });
    });

    it('renders correctly', () => {
        const wrapper = shallow(
          <HomePageCard
            productCode={'PERSONAL'}
          />,
        );
        expect(wrapper).toMatchSnapshot();
      });
})