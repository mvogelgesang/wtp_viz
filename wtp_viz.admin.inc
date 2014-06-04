<?php

/**
 * @file
 * Admin page callback file for the wtp_viz module.
 */

/**
 * Settings form display.
 */
function wtp_viz_admin_settings() {
  $form['config'] = array(
    '#type' => 'fieldset',
    '#title' => t('Configuration settings'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
  );
  $form['config']['api_key'] = array(
    '#type' => 'textfield',
    '#title' => t('API Key'),
    '#default_value' => variable_get('wtp_viz_api_key', ''),
    '#description' => t('API Key issued by We the People petitions site.'),
  );
  $form['config']['base_URL'] = array(
    '#type' => 'textfield',
    '#title' => t('Base URL'),
    '#default_value' => variable_get('wtp_viz_base_URL', ''),
    '#description' => t('Base URL for the We the People petitions site.'),
  );
  
  $form['submit'] = array(
    '#type' => 'submit',
    '#value' => t('Save configuration'),
  );
  $form['reset'] = array(
    '#type' => 'submit',
    '#value' => t('Reset to defaults'),
  );
  
  return $form;
}

/** 
 * Submit hook for the settings form.
 */
function wtp_viz_admin_settings_submit($form, &$form_state) {
  $op = $form_state['clicked_button']['#value'];
  switch ($op) {
    case t('Save configuration'):
      variable_set('wtp_viz_api_key', $form_state['values']['api_key']);
      variable_set('wtp_viz_base_URL', $form_state['values']['base_URL']);
      drupal_set_message(t('The configuration options have been saved.'));
      break;
    case t('Reset to defaults'):
      variable_del('wtp_viz_api_key');
      variable_del('wtp_viz_base_URL');
      drupal_set_message(t('The configuration options have been reset to their default values.'));
      break;
  }
}