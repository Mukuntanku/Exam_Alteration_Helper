import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException

browser = webdriver.Chrome()
browser.maximize_window()
browser.get('https://aumscb.amrita.edu/cas/login?service=https%3A%2F%2Faumscb.amrita.edu%2Faums%2FJsp%2FCommon%2Findex.jsp')

# Find the username and password input fields and enter your login credentials
username_field = browser.find_element(By.XPATH, "/html/body/div/div/div[2]/form/section[1]/input")
username_field.send_keys("cb.en.u4cse20041")
password_field = browser.find_element(By.XPATH, "/html/body/div/div/div[2]/form/section[2]/input")
password_field.send_keys("123456789")
submit_button = browser.find_element(By.XPATH, "/html/body/div/div/div[2]/form/section[3]/input[3]")
submit_button.click()

browser.implicitly_wait(10)
# exam_score = browser.find_element(By.XPATH, value = '//*[@id="navbar-menu"]/li[5]/a')
# exam_score.click()
# browser.implicitly_wait(10)
view_marks = browser.find_element(By.XPATH, "/html/body/div[8]/div[1]/div/ul/li[6]/ul/li[2]/a")
view_marks.click()
browser.implicitly_wait(10)