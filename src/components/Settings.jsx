import {
  Settings as SettingsIcon,
  Bell,
  Palette,
  Shield,
  User,
  Check
} from "lucide-react";

export default function Settings() {
  return (
    <section className="pageSection">

      <div className="pageTop">
        <div>
          <div className="eyebrow">
            <SettingsIcon size={13} />
            SETTINGS
          </div>

          <h2>Library Settings ⚙️</h2>

          <p>
            Customize your library management system.
          </p>
        </div>
      </div>

      <div className="settingsGrid">

        {/* PROFILE */}
        <div className="settingsCard">

          <div className="settingsIcon purpleSettings">
            <User size={20} />
          </div>

          <div className="settingsContent">
            <h3>Profile</h3>
            <p>Manage your administrator profile.</p>

            <div className="settingRow">
              <span>Administrator</span>
              <b>Library Admin</b>
            </div>

            <div className="settingRow">
              <span>Email</span>
              <b>admin@library.com</b>
            </div>
          </div>

        </div>


        {/* NOTIFICATIONS */}
        <div className="settingsCard">

          <div className="settingsIcon pinkSettings">
            <Bell size={20} />
          </div>

          <div className="settingsContent">
            <h3>Notifications</h3>
            <p>Control your library notifications.</p>

            <div className="settingRow">
              <span>Book reminders</span>

              <div className="settingCheck">
                <Check size={14} />
              </div>
            </div>

            <div className="settingRow">
              <span>Return alerts</span>

              <div className="settingCheck">
                <Check size={14} />
              </div>
            </div>
          </div>

        </div>


        {/* APPEARANCE */}
        <div className="settingsCard">

          <div className="settingsIcon orangeSettings">
            <Palette size={20} />
          </div>

          <div className="settingsContent">
            <h3>Appearance</h3>
            <p>Manage the look of your dashboard.</p>

            <div className="themeOptions">

              <button className="themeOption activeTheme">
                <span className="themePreview lightPreview"></span>
                Light
              </button>

              <button className="themeOption">
                <span className="themePreview purplePreview"></span>
                Purple
              </button>

            </div>
          </div>

        </div>


        {/* SECURITY */}
        <div className="settingsCard">

          <div className="settingsIcon greenSettings">
            <Shield size={20} />
          </div>

          <div className="settingsContent">
            <h3>Security</h3>
            <p>Manage account security preferences.</p>

            <div className="securityStatus">
              <span className="securityDot"></span>

              <div>
                <b>Account Protected</b>
                <small>Your library account is secure.</small>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}