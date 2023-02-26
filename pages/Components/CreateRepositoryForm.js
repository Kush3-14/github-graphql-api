import { useState } from "react";
import axios from "axios";
import { useMutation, gql,} from "@apollo/client";

const CREATE_REPO = gql`
  mutation CreateRepository($input: CreateRepositoryInput!) {
    createRepository(input: $input) {
      clientMutationId
    }
  }
`;

const CreateRepositoryForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    visibility: "",
  });

  const [createLink] = useMutation(CREATE_REPO, {
    variables: {
      input: {
        clientMutationId: "",
        name: formState.name,
        visibility: formState.visibility,
      },
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    createLink();
  };

  return (
    <>
    <div>
      <h2>Create a repository:</h2>
    </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-column mt3">
          <label>
            Name:
            <input
              className="mb2"
              value={formState.name}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  name: e.target.value,
                })
              }
              type="text"
              placeholder="Name of repo"
            />
          </label>
          <br />
          <label>
            Visibility:
            <input
              className="mb2"
              value={formState.visibility}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  visibility: e.target.value,
                })
              }
              type="text"
              placeholder="PUBLIC / PRIVATE"
            />
          </label>
        </div>
        <button className="btn btn-success" type="submit">
          Create Repository
        </button>
      </form>
    </>
  );
};

export default CreateRepositoryForm;
