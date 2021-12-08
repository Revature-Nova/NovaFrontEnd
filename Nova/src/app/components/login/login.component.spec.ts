import {HttpClientModule} from '@angular/common/http';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {LoginComponent} from './login.component';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ ReactiveFormsModule, FormsModule, HttpClientModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * @author Erika Johnson
   * First Test -> tests the number of elements within the UI(html) are equal to the defined form controls
   * Second Test -> tests the reactive forms intial values
   * Third Test -> tests username value/validation before entering into HTMl element(input fields)
   * Fourth Test -> test vailidation of entire login form
   */

  fit('Test Login Form Element Count', () => {
    const formElement = fixture.debugElement.nativeElement.querySelector('#loginForm')
    const inputElements = formElement.querySelectorAll('input');
    expect(inputElements.length).toEqual(2);
  })

  fit('Check login form group intial values', () => {
    const loginFormGroup = component.loginForm
    const loginFormValues = {
      username: '',
      password: ''
    }
    expect(loginFormGroup.value).toEqual(loginFormValues)
  })


  // fit('Check username value after entering value/validation into input', () => {
  //   const loginFormUsernameElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#loginForm').querySelector('#username')
  //   loginFormUsernameElement.value = 'medicinering2'
  //   loginFormUsernameElement.dispatchEvent(new Event('input'))
  //   fixture.detectChanges()
  //   fixture.whenStable().then(() => {
  //     const usernameFormGroupValue = component.loginForm.get('medicinering2')
  //     expect(loginFormUsernameElement.value).toEqual(usernameFormGroupValue?.value)
  //     // expect(component.loginForm.value).toEqual('')
  //    expect({ username: '', password: '' }).toEqual;
  //   })
  // })

  fit('Check login form is valid', () => {
    const loginFormUsernameElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#username')
    const passwordFormElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#password');
    loginFormUsernameElement.value = 'medicinering2'
    passwordFormElement.value = 'Password1!'
    loginFormUsernameElement.dispatchEvent(new Event('input'))
    passwordFormElement.dispatchEvent(new Event('input'))
    const isLoginFormValid = component.loginForm.valid
    fixture.whenStable().then(() => {
      expect(isLoginFormValid).toBeTruthy();
    })
  })

});
