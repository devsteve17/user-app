import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Box, Columns, Heading, Table } from "react-bulma-components";
import { UserProfile } from "../userprofile/userProfile";

type Users = {
  [key: string]: string;
};

export const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [userProfileId, setUserProfileId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios("https://jsonplaceholder.typicode.com/users");
      setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Columns>
        <Columns.Column>
          <Heading renderAs="h3">Users</Heading>
          <Box>
            <Table>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Full Name</th>
                  <th>Email Address</th>
                  <th>actions</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user: Users) => {
                  const { id, name, username, email } = user;
                  return (
                    <tr key={id}>
                      <td>{username}</td>
                      <td>{name}</td>
                      <td>{email}</td>
                      <td>
                        <Button
                          color="info"
                          renderAs="span"
                          onClick={() => {
                            setUserProfileId(id);
                          }}
                        >
                          Details
                        </Button>
                        &nbsp;
                        <Button
                          color="danger"
                          renderAs="span"
                          onClick={() => {
                            // TODO
                          }}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Box>
        </Columns.Column>
        <Columns.Column>
          {userProfileId !== "" && (
            <>
              {/* TODO refactor to be better solution */}
              <UserProfile user={users[parseInt(userProfileId)]} />
            </>
          )}
        </Columns.Column>
      </Columns>
    </>
  );
};
