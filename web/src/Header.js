// Copyright 2020 The casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: props,
    };
  }

  componentDidMount() {
  }

  render() {
    let username = "alice";

    return (
      <div id="Top">
        <div className="content">
          <div style={{paddingTop: "6px"}}>
            <table cellPadding="0" cellSpacing="0" border="0" width="100%">
              <tbody>
              <tr>
                <td width="110" align="left"><a href="/" name="top" title="way to explore">
                  <div id="Logo" />
                </a></td>
                <td width="auto" align="left">
                  <div id="Search">
                    <form action="https://www.google.com" onSubmit="return dispatch()" target="_blank">
                      <div id="qbar" className="">
                        <input type="text" maxLength="40" name="q" id="q" value="" onFocus="$('#qbar').addClass('qbar_focus')" onBlur="$('#qbar').removeClass('qbar_focus')" />
                      </div>
                    </form>
                  </div>
                </td>
                <td width="570" align="right" style={{paddingTop: "2px"}}>
                  <a href="/" className="top">
                    Home
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href={`/member/${username}`} className="top">
                    {username}
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="/notes" className="top">
                    Note
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="/t" className="top">
                    Timeline
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="/settings" className="top">
                    Setting
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="#;" onClick="if (confirm('Are you sure to log out?')) { location.href= '/signout'; }" className="top">
                    Logout
                  </a>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
