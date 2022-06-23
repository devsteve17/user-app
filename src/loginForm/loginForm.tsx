import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Button, Card, Container, Form } from "react-bulma-components";
import { validateEmail, validatePassword } from "./validation";

const { Field, Control, Help, Label } = Form;
const { Content, Header } = Card;

export const LoginForm = () => {
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const emailInput = useRef<HTMLInputElement | null>(null);
  const passwordInput = useRef<HTMLInputElement | null>(null);

  const history = useHistory();

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        if (isEmailValid === true && isPasswordValid === true) {
          history.push("/users");
        }
      }}
    >
      <Container>
        <Card style={{ width: 550, margin: "auto", marginTop: 300 }}>
          <Header>
            <Header.Title>Log In</Header.Title>
          </Header>
          <Content>
            <Content>
              <Field>
                <Label>Email</Label>
                <Control>
                  <input className="input" placeholder="Email" type="email" ref={emailInput} />
                </Control>
                {isEmailValid === false && (
                  <Help color="danger">This email is invalid or less than 7 characters</Help>
                )}
              </Field>
              <Field>
                <Label>Password</Label>
                <Control>
                  <input
                    className="input"
                    placeholder="Password"
                    type="password"
                    ref={passwordInput}
                  />
                </Control>
                {isPasswordValid === false && (
                  <Help color="danger">Your password should contain 8 characters or more</Help>
                )}
              </Field>
              <Field>
                <Control>
                  <Button
                    color="info"
                    renderAs="span"
                    onClick={() => {
                      const emailValue = emailInput?.current?.value;
                      const passwordValue = passwordInput?.current?.value;
                      setIsEmailValid(validateEmail(emailValue));
                      setIsPasswordValid(validatePassword(passwordValue));
                    }}
                    submit={true}
                  >
                    Continue
                  </Button>
                </Control>
              </Field>
            </Content>
          </Content>
        </Card>
      </Container>
    </form>
  );
};
