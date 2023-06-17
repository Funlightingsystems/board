# DMX-Controller-App
Includes the backend and the unity package

Use the "Open folder" option in the unity hub, the folder containing the 'game' files is called like DMXController.
# i do know why i made this
## you can take the code if you want, idc. and laugh at my pathetic-ness

# HEY! I noticed something 'fun' 
## Haha, fun... get it? nope. Nevermind.

I noticed that the StageCL UI is rendered with Qt Widgets, I have linked the .ss file below with the things included. If I need to take pictures of certain screens on the stageCL I can. I can add my current pictures here aswell if requested. 

```

QWidget
{ 
    font: 14px "Sans Serif"; 
    /*background: transparent;*/
    /*background: #f0f0f0;*/
    background: #e0e0e0;
}

QCheckBox::indicator:unchecked {
    image: url(:/StageLedWidgetsResources/checkbox_off.png);
}

QCheckBox::indicator:checked {
    image: url(:/StageLedWidgetsResources/checkbox_on.png);
}

MonitorMimicWidget
{
     background: #f0f0f0;
}

QTableView, QListView
{
    background: #f0f0f0;
}

JGroupBox
{ 
    font: 9pt "Sans Serif"; 
}


QLabel 
{
    font: 20px "Sans Serif"; 
}

QLabel#_statsLabel 
{
    font: 12px "Sans Serif"; 
    background: lightGray;
    border: 2px solid black;
    border-radius: 4px;
    padding: 2px;
}

QLabel#_intensityLabel,  QLabel#_fadeTimeLabel, QLabel#_secondsLabel
{
    font: 20px "Sans Serif";
    border: 2px solid gray;
    border-radius: 2px;
    padding: 0 0px;
    background: lightgray;
    selection-background-color: darkgray;
}

QLabel#_fixtureFaderLabel, QLabel#_sceneFaderLabel, QLabel#_chaseFaderLabel, QLabel#_cuelistFaderLabel, QLabel#_gmFaderLabel, QLabel#_monitorFadeTimeLabel
{
    font: 14px "Sans Serif";
    border: 2px solid gray;
    border-radius: 2px;
    padding: 0 0px;
    background: lightgray;
    selection-background-color: darkgray;
}

QLabel#previewLabel
{
    border: 4px solid gray;
    border-radius: 6px;
    padding: 0 0px;
    background: lightgray;
}

QLabel#_monitorLabel_1, QLabel#_monitorLabel_2, QLabel#_monitorLabel_3, QLabel#_monitorLabel_4, QLabel#_monitorLabel_5, QLabel#_monitorLabel_6
{
    font: 14px "Sans Serif";
}

QLabel#_fixtureTypeLabel
{
    font: 20px "Sans Serif";
    border: 2px solid gray;
    border-radius: 2px;
    padding: 0 0px;
    padding-left: 4px;
    background: gray;
    color: white;
    selection-background-color: darkgray;
}

QLabel#_fixtureNumberLabel, QLabel#_fixtureFolderLabel
{
    font: 16px "Arial"; 
    border: 4px solid #888888;
    border-radius: 8px;
    color: black;
    background-color: #e0e0e0;
}

MultiPatchDialog QLabel#_label
{
    font: 14px "Sans Serif"; 
}

PatchWizardBaseWidget QLabel
{
    font: 16px "Sans Serif"; 
}

PatchWizardPatchWidget QLabel#_statusLabel 
{
    font: 12px "Sans Serif"; 
    background: lightGray;
    border: 2px solid black;
    border-radius: 4px;
    padding: 2px;
}


PatchWizardPatchWidget QLineEdit:focus
{
    color: white;
    background: gray;
}

PatchWizardIntroWidget QLabel
{
    font: 14px "Sans Serif"; 
}

QPushButton
{ 
    font: 20px "Arial"; 
    border: 4px solid #888888;
    border-radius: 8px;
    color: black;
    background-color: #aaaaaa;
}

QPushButton:disabled
{ 
    border-color: #bbbbbb;
    background-color: #bbbbbb;
    color: #777777;
}

QPushButton:pressed, QPushButton:selected, QPushButton:focus
{ 
    border-color: red;
}

QPushButton#_fixtureNameButton
{ 
    border-color: gray;
}

QPushButton:checked 
{ 
    background-color: #444444;
    color: white;
}

QAbstractButton[jButtonStyle="Middle"]
{
	border-radius: 0px;
	border-left-width: 2px; 
     border-right-width: 2px;
}

QAbstractButton[jButtonStyle="First"]
{
	border-top-right-radius: 0px;
	border-bottom-right-radius: 0px;
	border-right-width: 2px;
}

QAbstractButton[jButtonStyle="Last"]
{
	border-top-left-radius: 0px;
	border-bottom-left-radius: 0px;
	border-left-width: 2px;
}

VirtualKeyboardBase QPushButton:checked
{ 
    font: 20px "Arial"; 
    border: 2px solid #ff0000;
    border-radius: 6px;
    background-color: qlineargradient(x1: 0, y1: 0, x2: 0, y2: 1,
                                       stop: 0 #dadbde, stop: 1 #a7a9af);
}

VirtualKeyboardBase QPushButton:focus
{ 
    outline: none;
    border-color: black;

}


QPushButton#_lineEditButton
{ 
    border: 0px solid #8f8f91;
    border-radius: 0px;
    background:transparent;
}

MenuButton, PatchWizardBaseWidget QPushButton
{ 
    font: 20px "Arial"; 
    color: black;
    background-color: qlineargradient(x1: 0, y1: 0, x2: 0, y2: 1,stop: 0 #ffffff, stop: 1 #c0c0c0);
    border: 1px solid #000000;
    border-radius: 0px;
}


MenuButton:pressed, PatchWizardBaseWidget QPushButton:pressed
{ 
    font: 20px "Arial"; 
    color: white;
    background-color: qlineargradient(x1: 0, y1: 0, x2: 0, y2: 1,stop: 0 #c0c0c0, stop: 1 #000000);
    border: 1px solid #000000;
    border-radius: 0px;
}

MenuButton:checked, PatchWizardBaseWidget QPushButton:checked
{ 
    font: 20px "Arial"; 
    color: white;
    background-color: qlineargradient(x1: 0, y1: 0, x2: 0, y2: 1,stop: 0 #c0c0c0, stop: 1 #000000);
    border: 1px solid #000000;
    border-radius: 0px;
}

MenuButton:disabled, PatchWizardBaseWidget QPushButton:disabled
{ 
    font: 20px "Arial"; 
    color: white;
    background-color: #e0e0e0;
    border: 1px solid #000000;
    border-radius: 0px;
}

QListView#_monitorListWidget 
{
    selection-background-color: #6470b9;
}

QListView::item#_monitorListWidget
{
    font: 22px "Sans Serif"; 
}


QTableView 
{
    font: 20px "Sans Serif"; 
    selection-background-color: #6470b9;
}

QTableView::item
{
    selection-color : white;
}

QTableView::item:!enabled
{
    color: #505050;
}

QWidget#_instructionsWidget
{ 
    font: 14px "Arial"; 
    border: 4px solid #303030;
    border-radius: 8px;
    color: white;
    background-color: #303030;
    /*background-color: qlineargradient(x1: 0, y1: 0, x2: 0, y2: 1,stop: 0 #8C8F8C, stop: 1 #000000)*/
}

QTableView#_dmxTable 
{
    font: 14px "Arial"; 
    selection-background-color: #6470b9;
}

QTableView#_modelTableWidget, QTableView#_manufacturerTableWidget  
{
    font: 14px "Arial"; 
}

QTableView#_fileTableWidget 
{
    font: 14px "Arial"; 
}

QHeaderView::section
{
    font: 18px "Arial"; 
    background-color: gray;
    color: white;
    padding-left: 4px;
    border: 1px solid white;
}

QScrollBar:vertical {
    border: 0px solid grey;
    background: lightgray;
    width: 12px;
    margin: 1px 0 1px 0;
}

QScrollBar:horizontal {
    border: 0px solid grey;
    background: lightgray;
    height: 12px;
    margin: 0 1px 0 1px;
}

QScrollBar::handle:vertical {
    background: #6470b9;
    min-height: 20px;
    width: 8px;
}

QScrollBar::handle:horizontal {
    background: #6470b9;
    min-width: 20px;
    width: 8px;
}

QScrollBar::add-line:vertical {
    border: 0px solid grey;
    background: lightgray;
    height: 0px;
    subcontrol-position: bottom;
    subcontrol-origin: margin;
}

QScrollBar::add-line:horizontal {
    border: 0px solid grey;
    background: lightgray;
    height: 0px;
    subcontrol-position: right;
    subcontrol-origin: margin;
}

QScrollBar::sub-line:vertical {
    border: 0px solid grey;
    background: lightgray;
    height: 0px;
    subcontrol-position: top;
    subcontrol-origin: margin;
}

QScrollBar::sub-line:horizontal {
    border: 0px solid grey;
    background: lightgray;
    height: 0px;
    subcontrol-position: left;
    subcontrol-origin: margin;
}

QScrollBar::up-arrow:vertical, QScrollBar::down-arrow:vertical, QScrollBar::left-arrow:horizontal, QScrollBar::right-arrow:horizontal {
    border: 0px lightgray;
    width: 0px;
    height: 0px;
    background: white;
}

QScrollBar::add-page:vertical, QScrollBar::sub-page:vertical, QScrollBar::add-page:horizontal, QScrollBar::sub-page:horizontal {
    background: none;
}

EditFadeTimingDialog
{
    background: white;
}

VirtualKeyboardBase
{
    background: white;
}


VirtualKeyboardBase QLineEdit
{
    font: 20px "Arial"; 
    color: white;
    background: gray;
}

QLineEdit
{
    font: 20px "Arial"; 
    color: white;
    background: gray;
}

VirtualKeyboardBase QPushButton
{
    background-color: qlineargradient(x1: 0, y1: 0, x2: 0, y2: 1,stop: 0 #8C8F8C, stop: 1 #000000);
    color:white; 
    border: 1px solid #000000;
    border-radius:6px;
}


QPushButton[isDialogNavigationButton="true"]
{ 
    font: 16px "Arial"; 
    color: white;
    border: 2px solid black;
    border-radius: 4px;
    background-color: qlineargradient(x1: 0, y1: 0, x2: 0, y2: 1,stop: 0 #8C8F8C, stop: 1 #000000);
}

QPushButton:pressed[isDialogNavigationButton="true"]
{ 
    font: 16px "Arial"; 
    color: red;
    border: 2px solid #ff0000;
    border-radius: 4px;
    background-color: qlineargradient(x1: 0, y1: 0, x2: 0, y2: 1,stop: 0 #8C8F8C, stop: 1 #000000);
}

QPushButton[isHomeScreenButton="true"]
{ 
    font: 16px "Sans Serif";
}

EditFadeTimingDialog QLabel 
{
    font: 14px "Arial"; 
}


ChaseLiveWidget QLineEdit:read-only#_chaseLabelLineEdit, ChaseStepsWidget QLineEdit:read-only#_chaseLabelLineEdit, FilesSaveWidget QLineEdit {
    font: 20px "Arial"; 
    color: white;
    background: gray;
}


ChaseLiveWidget QLineEdit:read-only, ChaseStepsWidget QLineEdit:read-only {
    font: 20px "Arial"; 
    background: lightGray;
}

QTabWidget::pane { /* The tab widget frame */
    border-top: 2px solid #8f8f91;
    border-left: 2px solid #8f8f91;
    border-right: 2px solid #8f8f91;
    border-bottom: 2px solid #8f8f91;
    /*background: white;*/
    border-top-right-radius: 6px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
}

QWidget#_questionLabelLargeFont {
    font: 20px "Sans Serif";
}

QWidget#_questionLabelSmallFont {
    font: 16px "Sans Serif";
}

QTabBar::tab {
    background: qlineargradient(x1: 0, y1: 0, x2: 0, y2: 1,
                                stop: 0 #f6f7fa, stop: 1 #dadbde);
    border: 2px solid #8f8f91;
    border-bottom-color: #8f8f91;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    min-width: 8ex;
    padding: 2px;
}

QTabBar::tab:selected {
    font: 14px "Arial"; 
    background: qlineargradient(x1: 0, y1: 0, x2: 0, y2: 1,
                                stop: 0 #dadbde, stop: 1 #a7a9af);
    border-color: #8f8f91;
    border-bottom-color: #8f8f91;
}


HomeWidget
{
    background-image: url(:/StageLedWidgetsResources/mainBackground.png);
}


HomeWidget QPushButton
{
    font: 8px "Arial"; 
    border: 2px solid #ffffff;
}


HomeWidget QPushButton:disabled
{
    font: 30px "Arial"; 
    color: #808080;
    border: 2px solid #808080;
}


HomeWidget QLabel
{
    background: transparent;
}

HomeWidget QPushButton:checked
{ 
    font: 20px "Arial"; 
    border: 2px solid #0000ff;
    border-radius: 6px;
}

HomeWidget QAbstractButton
{
    icon-size: 72px, 60px;
    padding-top: 66px;
    color: white;
}

HomeWidget QAbstractButton:disabled
{
    background: transparent;
    color: gray;
}

HomeWidget QAbstractButton#_channelButton
{
    background: url(:/StageLedWidgetsResources/colour_n.png) top center no-repeat;
}

HomeWidget QAbstractButton:pressed#_channelButton, HomeWidget QAbstractButton:checked#_channelButton
{
    background: url(:/StageLedWidgetsResources/colour_s.png) top center no-repeat;
}

HomeWidget QAbstractButton:disabled#_channelButton
{
    background: url(:/StageLedWidgetsResources/colour_c.png) top center no-repeat;
}

HomeWidget QAbstractButton#_sceneButton
{
    background: url(:/StageLedWidgetsResources/scenes_n.png) top center no-repeat;
}

HomeWidget QAbstractButton:pressed#_sceneButton, HomeWidget QAbstractButton:checked#_sceneButton
{
    background: url(:/StageLedWidgetsResources/scenes_s.png) top center no-repeat;
}

HomeWidget QAbstractButton:disabled#_sceneButton
{
    background: url(:/StageLedWidgetsResources/scenes_c.png) top center no-repeat;
}

HomeWidget QAbstractButton#_chaseButton
{
    background: url(:/StageLedWidgetsResources/chases_n.png) top center no-repeat;
}

HomeWidget QAbstractButton:pressed#_chaseButton, HomeWidget QAbstractButton:checked#_chaseButton
{
    background: url(:/StageLedWidgetsResources/chases_s.png) top center no-repeat;
}

HomeWidget QAbstractButton:disabled#_chaseButton
{
    background: url(:/StageLedWidgetsResources/chases_c.png) top center no-repeat;
}

HomeWidget QAbstractButton#_cueListButton
{
    background: url(:/StageLedWidgetsResources/cuelist_n.png) top center no-repeat;
}

HomeWidget QAbstractButton:pressed#_cueListButton, HomeWidget QAbstractButton:checked#_cueListButton
{
    background: url(:/StageLedWidgetsResources/cuelist_s.png) top center no-repeat;
}

HomeWidget QAbstractButton:disabled#_cueListButton
{
    background: url(:/StageLedWidgetsResources/cuelist_c.png) top center no-repeat;
}

HomeWidget QAbstractButton#_monitorButton
{
    background: url(:/StageLedWidgetsResources/monitor_n.png) top center no-repeat;
}

HomeWidget QAbstractButton:pressed#_monitorButton, HomeWidget QAbstractButton:checked#_monitorButton
{
    background: url(:/StageLedWidgetsResources/monitor_s.png) top center no-repeat;
}

HomeWidget QAbstractButton:disabled#_monitorButton
{
    background: url(:/StageLedWidgetsResources/monitor_c.png) top center no-repeat;
}

HomeWidget QAbstractButton#_filesButton
{
    background: url(:/StageLedWidgetsResources/files_n.png) top center no-repeat;
}

HomeWidget QAbstractButton:pressed#_filesButton, HomeWidget QAbstractButton:checked#_filesButton
{
    background: url(:/StageLedWidgetsResources/files_s.png) top center no-repeat;
}

HomeWidget QAbstractButton:disabled#_filesButton
{
    background: url(:/StageLedWidgetsResources/files_c.png) top center no-repeat;
}

HomeWidget QAbstractButton#_patchButton
{
    background: url(:/StageLedWidgetsResources/patch_n.png) top center no-repeat;
}

HomeWidget QAbstractButton:pressed#_patchButton, HomeWidget QAbstractButton:checked#_patchButton
{
    background: url(:/StageLedWidgetsResources/patch_s.png) top center no-repeat;
}

HomeWidget QAbstractButton:disabled#_patchButton
{
    background: url(:/StageLedWidgetsResources/patch_c.png) top center no-repeat;
}

HomeWidget QAbstractButton#_setupButton
{
    background: url(:/StageLedWidgetsResources/setup_n.png) top center no-repeat;
}

HomeWidget QAbstractButton:pressed#_setupButton, HomeWidget QAbstractButton:checked#_setupButton
{
    background: url(:/StageLedWidgetsResources/setup_s.png) top center no-repeat;
}

HomeWidget QAbstractButton:disabled#_setupButton
{
    background: url(:/StageLedWidgetsResources/setup_c.png) top center no-repeat;
}

ChannelColourWidget QFrame
{
    background: transparent;
}

HardwareTestHomeWidget QPushButton:focus
{ 
    font: 20px "Arial"; 
    border: 2px solid #0000ff;
    border-radius: 6px;
}

QToolButton
{ 
    font: 20px "Arial"; 
    border: 0px solid #ff0000;
    border-radius: 0px;
    color: #000000;
    background-color: transparent;
}

HardwareTestHomeWidget QPushButton[test_passed="true"]:enabled
{
    background-color: qlineargradient(x1: 0, y1: 0, x2: 0, y2: 1,stop: 0 #00FF00, stop: 1 #004000);
}

HardwareTestHomeWidget QPushButton[test_failed="true"]:enabled
{
    background-color: qlineargradient(x1: 0, y1: 0, x2: 0, y2: 1,stop: 0 #FF0000, stop: 1 #400000);
}

HardwareTestHomeWidget QPushButton[beat_detected="true"]:enabled
{
    background-color: qlineargradient(x1: 0, y1: 0, x2: 0, y2: 1,stop: 0 #00FF00, stop: 1 #004000);
}

HardwareTestHomeWidget JLabel#_label3
{
    font: 16px "Courier";
    font-weight: bold;
}

QPushButton#_fixtureNameButton
{ 
    font: 16px "Arial"; 
}

QPushButton:disabled#_fixtureNameButton
{ 
    color: black;
}


``` 

It uses qt.io 
```qt.io ``` for the UI.