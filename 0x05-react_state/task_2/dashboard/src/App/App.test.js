import React from "react";
import { shallow, mount } from 'enzyme';
import { jest } from '@jest/globals';
import App from './App';
import { StyleSheetTestUtils } from "aphrodite";
import 'aphrodite';
import { AppContext, user, logOut } from "./AppContext";

describe('App Component', () => {

    let wrapper;
    beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();

        wrapper = shallow(<App />);
    });

    it("Renders without crashing", ()=> {
        expect(wrapper).exists();
    });

    it("Renders an Notifications", ()=> {
        expect(wrapper.find('Notifications')).toHaveLength(1);
    });

    it("Renders an Header", ()=> {
        expect(wrapper.find('Header')).toHaveLength(1);
    });

    it("Renders an Login", ()=> {
        expect(wrapper.find('Login')).toHaveLength(1);
    });

    it("Renders an Login", ()=> {
        expect(wrapper.find('Footer')).toHaveLength(1);
    });


  it('test to check that CourseList is not displayed inside App', () => {
    expect(wrapper.find("CourseList")).toHaveLength(0);
  });
});

describe("Testing <App isLoggedIn={true} />", () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<App isLoggedIn={true}/>);
  });

  it("the Login component is not included", () => {
    expect(wrapper.find('Login')).toHaveLength(0);
  });

  it("the CourseList component is included", () => {
    expect(wrapper.find('CourseList').exists());
  });

});

describe("Testing <App logOut={} />", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();

  });

  it("verifies that when the keys control and h are pressed the logOut function, passed as a prop, is called and the alert function is called with the string Logging you out", () => {
    const wrapper = mount(<App logOut={()=>{console.log("ctrl and h are pressed")}}/>);
    window.alert = jest.fn();
    const inst = wrapper.instance();
    const logout = jest.spyOn(inst, 'logOut');
    const alert = jest.spyOn(window, 'alert');
    const event = new KeyboardEvent('keydown', {bubbles:true, ctrlKey: true, key: 'h'});
    document.dispatchEvent(event);
    expect(alert).toBeCalledWith("Logging you out");
    expect(logout).toBeCalled();
    alert.mockRestore();
  });
});

describe("Testing App State />", () => {
  let wrapper;
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<App />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('check if default value of displayDrwer in state is false', () => {
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('Verifies that after calling handleDisplayDrawer, the state displayDrawer should be true', ()=> {
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);
  });

  it('Verifies that after calling handleHideDrawer, the state displayDrawer should be false', ()=> {
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it(`Tests that the logIn function updates user's state correctly`, () => {
		wrapper = mount(
			<AppContext.Provider value={{ user, logOut }}>
				<App />
			</AppContext.Provider>
		);

		const myUser = {
			email: 'test@gmail.com',
			password: 'test',
			isLoggedIn: true,
		}

		expect(wrapper.state().user).toEqual(user);
		const instance = wrapper.instance();
		instance.logIn(myUser.email, myUser.password);
		expect(wrapper.state().user).toEqual(myUser);
		wrapper.unmount();
	})

	it(`Tests that the logOut function updates user's state correctly`, () => {
		wrapper = mount(
			<AppContext.Provider value={{ user, logOut }}>
				<App />
			</AppContext.Provider>
		);

		const myUser = {
			email: 'test@gmail.com',
			password: 'test',
			isLoggedIn: true,
		}

		expect(wrapper.state().user).toEqual(user);
		const instance = wrapper.instance();
		instance.logOut();
		expect(wrapper.state().user).toEqual(user);
		wrapper.unmount();
	})
});