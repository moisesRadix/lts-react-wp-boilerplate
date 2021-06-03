import styled from "styled-components";

export const FormGroup = styled.div`
  color: darkslategray;
  display: block;
  width: 300px;
  margin: 15px auto;
  margin-bottom: 0.5em;
  .has-danger {
    margin-top: -5px !important;
  }
`;
export const InputGroup = styled.div`
  color: darkslategray;
  margin-bottom: 10px;
  position: relative;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-align: stretch;
  align-items: stretch;
  width: 100%;
`;

export const InputGroupAddon = styled.div`
  margin: 0;
  display: flex;
`;

export const InputGroupText = styled.div`
  padding: 0.375rem 0.75rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  background-color: #e7f0f9 !important;
  border: 1px solid transparent !important;
  border-radius: var(--radix-border-radius) 0 0 var(--radix-border-radius) !important;
  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
  align-items: center;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  text-align: center;
  white-space: nowrap;
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  color: palevioletred;
  display: block;
`;

export const Input = styled.input`
  border: 1px solid #9b9c9c;
  padding: 0.5em;
  color: #424242;
  background: white;
  border-radius: 3px;
  width: 95%;
  outline: none !important;
  &:focus {
    outline: none !important;
  }
`;

export const SubmitLoginButton = styled.button`
  margin-top: 0px;
  margin-bottom: 1em;
  background: #18a9ce;
  color: white;
  border: none;
  font-weight: 300;
  padding: 5px 0;
  width: 130px;
  border-radius: 3px;
  outline: none !important;
  &:focus {
    outline: none !important;
  }
`;
