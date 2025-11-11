'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Script from 'next/script'
import Image from 'next/image'

export default function TallerPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState<typeof videoTestimonials[0] | null>(null)

  const openVideoModal = (video: typeof videoTestimonials[0]) => {
    setCurrentVideo(video)
    setIsModalOpen(true)
  }

  const closeVideoModal = () => {
    setIsModalOpen(false)
    setCurrentVideo(null)
  }

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeVideoModal()
      }
    }

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscKey)
      document.body.style.overflow = 'hidden' // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey)
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  // Inject ActiveCampaign form
  useEffect(() => {
    const injectForm = () => {
      const container = document.getElementById('activecampaign-form-container')
      if (container && !container.innerHTML) {
        container.innerHTML = `
          <style>@import url(https://fonts.bunny.net/css?family=sora:400,700);</style>
          <style>
          #_form_161_{font-size:14px;line-height:1.6;font-family:arial, helvetica, sans-serif;margin:0}#_form_161_ *{outline:0}._form_hide{display:none;visibility:hidden}._form_show{display:block;visibility:visible}#_form_161_._form-top{top:0}#_form_161_._form-bottom{bottom:0}#_form_161_._form-left{left:0}#_form_161_._form-right{right:0}#_form_161_ input[type="text"],#_form_161_ input[type="tel"],#_form_161_ input[type="date"],#_form_161_ textarea{padding:6px;height:auto;border:#979797 1px solid;border-radius:4px;color:#000 !important;font-size:14px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}#_form_161_ textarea{resize:none}#_form_161_ ._submit{-webkit-appearance:none;cursor:pointer;font-family:arial, sans-serif;font-size:14px;text-align:center;background:#F7A60F !important;border:2px solid #6A4CC9 !important;-moz-border-radius:35px !important;-webkit-border-radius:35px !important;border-radius:35px !important;color:#FFFFFF !important;padding:10px !important}#_form_161_ ._submit:disabled{cursor:not-allowed;opacity:0.4}#_form_161_ ._submit.processing{position:relative}#_form_161_ ._submit.processing::before{content:"";width:1em;height:1em;position:absolute;z-index:1;top:50%;left:50%;border:double 3px transparent;border-radius:50%;background-image:linear-gradient(#F7A60F, #F7A60F), conic-gradient(#F7A60F, #FFFFFF);background-origin:border-box;background-clip:content-box, border-box;animation:1200ms ease 0s infinite normal none running _spin}#_form_161_ ._submit.processing::after{content:"";position:absolute;top:0;bottom:0;left:0;right:0;background:#F7A60F !important;border:2px solid #6A4CC9 !important;-moz-border-radius:35px !important;-webkit-border-radius:35px !important;border-radius:35px !important;color:#FFFFFF !important;padding:10px !important}@keyframes _spin{0%{transform:translate(-50%, -50%) rotate(90deg)}100%{transform:translate(-50%, -50%) rotate(450deg)}}#_form_161_ ._close-icon{cursor:pointer;background-image:url("https://d226aj4ao1t61q.cloudfront.net/esfkyjh1u_forms-close-dark.png");background-repeat:no-repeat;background-size:14.2px 14.2px;position:absolute;display:block;top:11px;right:9px;overflow:hidden;width:16.2px;height:16.2px}#_form_161_ ._close-icon:before{position:relative}#_form_161_ ._form-body{margin-bottom:30px}#_form_161_ ._form-image-left{width:150px;float:left}#_form_161_ ._form-content-right{margin-left:164px}#_form_161_ ._form-branding{color:#fff;font-size:10px;clear:both;text-align:left;margin-top:30px;font-weight:100}#_form_161_ ._form-branding ._logo{display:block;width:130px;height:14px;margin-top:6px;background-image:url("https://d226aj4ao1t61q.cloudfront.net/hh9ujqgv5_aclogo_li.png");background-size:130px auto;background-repeat:no-repeat}#_form_161_ .form-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}#_form_161_ ._form-label,#_form_161_ ._form_element ._form-label{font-weight:bold;margin-bottom:5px;display:block}#_form_161_._dark ._form-branding{color:#333}#_form_161_._dark ._form-branding ._logo{background-image:url("https://d226aj4ao1t61q.cloudfront.net/jftq2c8s_aclogo_dk.png")}#_form_161_ ._form_element{position:relative;margin-bottom:10px;font-size:0;max-width:100%}#_form_161_ ._form_element *{font-size:14px}#_form_161_ ._form_element._clear{clear:both;width:100%;float:none}#_form_161_ ._form_element._clear:after{clear:left}#_form_161_ ._form_element input[type="text"],#_form_161_ ._form_element input[type="date"],#_form_161_ ._form_element select,#_form_161_ ._form_element textarea:not(.g-recaptcha-response){display:block;width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;font-family:inherit}#_form_161_ ._field-wrapper{position:relative}#_form_161_ ._inline-style{float:left}#_form_161_ ._inline-style input[type="text"]{width:150px}#_form_161_ ._inline-style:not(._clear){margin-right:20px}#_form_161_ ._form-element img._form-image{max-width:100%}#_form_161_ ._form_element ._form-fieldset{border:0;padding:0.01em 0 0 0;margin:0;min-width:0}#_form_161_ ._clear-element{clear:left}#_form_161_ ._full_width{width:100%}#_form_161_ ._form_full_field{display:block;width:100%;margin-bottom:10px}#_form_161_ input[type="text"]._has_error,#_form_161_ textarea._has_error{border:#F37C7B 1px solid}#_form_161_ input[type="checkbox"]._has_error{outline:#F37C7B 1px solid}#_form_161_ ._show_be_error{float:left}#_form_161_ ._error{display:block;position:absolute;font-size:14px;z-index:10000001}#_form_161_ ._error._above{padding-bottom:4px;bottom:39px;right:0}#_form_161_ ._error._below{padding-top:8px;top:100%;right:0}#_form_161_ ._error._above ._error-arrow{bottom:-4px;right:15px;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #FFDDDD}#_form_161_ ._error._below ._error-arrow{top:0;right:15px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #FFDDDD}#_form_161_ ._error-inner{padding:12px 12px 12px 36px;background-color:#FFDDDD;background-image:url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9 3V9H7V3H9ZM9 13V11H7V13H9Z' fill='%23CA0000'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:12px center;font-size:14px;font-family:arial, sans-serif;font-weight:600;line-height:16px;color:#000;text-align:center;text-decoration:none;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;box-shadow:0 1px 4px rgba(31, 33, 41, 0.298295)}@media only screen and (max-width:319px){#_form_161_ ._error-inner{padding:7px 7px 7px 25px;font-size:12px;line-height:12px;background-position:4px center;max-width:100px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}}#_form_161_ ._error-inner._form_error{margin-bottom:5px;text-align:left}#_form_161_ ._button-wrapper ._error-inner._form_error{position:static}#_form_161_ ._error-inner._no_arrow{margin-bottom:10px}#_form_161_ ._error-arrow{position:absolute;width:0;height:0}#_form_161_ ._error-html{margin-bottom:10px}.pika-single{z-index:10000001 !important}#_form_161_ input[type="text"].datetime_date{width:69%;display:inline}#_form_161_ select.datetime_time{width:29%;display:inline;height:32px}#_form_161_ input[type="date"].datetime_date{width:69%;display:inline-flex}#_form_161_ input[type="time"].datetime_time{width:29%;display:inline-flex}@media (min-width:320px) and (max-width:667px){::-webkit-scrollbar{display:none}#_form_161_{margin:0;width:100%;min-width:100%;max-width:100%;box-sizing:border-box}#_form_161_ *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;font-size:1em}#_form_161_ ._form-content{margin:0;width:100%}#_form_161_ ._form-inner{display:block;min-width:100%}#_form_161_ ._form-title,#_form_161_ ._inline-style{margin-top:0;margin-right:0;margin-left:0}#_form_161_ ._form-title{font-size:1.2em}#_form_161_ ._form_element{margin:0 0 20px;padding:0;width:100%}#_form_161_ ._form-element,#_form_161_ ._inline-style,#_form_161_ input[type="text"],#_form_161_ label,#_form_161_ p,#_form_161_ textarea:not(.g-recaptcha-response){float:none;display:block;width:100%}#_form_161_ ._row._checkbox-radio label{display:inline}#_form_161_ ._row,#_form_161_ p,#_form_161_ label{margin-bottom:0.7em;width:100%}#_form_161_ ._row input[type="checkbox"],#_form_161_ ._row input[type="radio"]{margin:0 !important;vertical-align:middle !important}#_form_161_ ._row input[type="checkbox"]+span label{display:inline}#_form_161_ ._row span label{margin:0 !important;width:initial !important;vertical-align:middle !important}#_form_161_ ._form-image{max-width:100%;height:auto !important}#_form_161_ input[type="text"]{padding-left:10px;padding-right:10px;font-size:16px;line-height:1.3em;-webkit-appearance:none}#_form_161_ input[type="radio"],#_form_161_ input[type="checkbox"]{display:inline-block;width:1.3em;height:1.3em;font-size:1em;margin:0 0.3em 0 0;vertical-align:baseline}#_form_161_ button[type="submit"]{padding:20px;font-size:1.5em}#_form_161_ ._inline-style{margin:20px 0 0 !important}#_form_161_ ._inline-style input[type="text"]{width:100%}}#_form_161_ .sms_consent_checkbox{position:relative;width:100%;display:flex;align-items:flex-start;padding:20px 0}#_form_161_ .sms_consent_checkbox input[type="checkbox"]{float:left;margin:5px 10px 10px 0}#_form_161_ .sms_consent_checkbox .sms_consent_message{display:inline;float:left;text-align:left;margin-bottom:10px;font-size:14px;color:#7D8799}#_form_161_ .sms_consent_checkbox .sms_consent_mini{width:90%}#_form_161_ .sms_consent_checkbox ._error._above{right:auto;bottom:0}#_form_161_ .sms_consent_checkbox ._error._above ._error-arrow{right:auto;left:5px}@media (min-width:320px) and (max-width:667px){#_form_161_ .sms_consent_checkbox ._error._above{top:-30px;left:0;bottom:auto}}#_form_161_ .field-required{color:#FF0000}#_form_161_{position:relative;text-align:left;margin:25px auto 0;padding:20px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;background:white !important;border-top:0px solid rgba(255, 250, 250, 0) !important;border-right:0px solid rgba(255, 250, 250, 0) !important;border-bottom:0px solid rgba(255, 250, 250, 0) !important;border-left:0px solid rgba(255, 250, 250, 0) !important;max-width:600px;-moz-border-radius:8px !important;-webkit-border-radius:8px !important;border-radius:8px !important;color:#000000}#_form_161_ ._show_be_error{min-width:100%}#_form_161_._inline-form,#_form_161_._inline-form ._form-content{font-family:Sora;font-size:25px;font-weight:400}#_form_161_._inline-form ._row span:not(.field-required),#_form_161_._inline-form ._row label{font-family:Sora;font-size:14px;font-weight:400;line-height:1.6em;color:#2459b5 !important}#_form_161__inlineform input[type="text"],#_form_161__inlineform input[type="date"],#_form_161__inlineform input[type="tel"],#_form_161__inlineform select,#_form_161__inlineform textarea:not(.g-recaptcha-response){font-family:Sora;font-size:14px;font-weight:400;font-color:#000000;line-height:1.6em}#_form_161_._inline-form ._html-code *:not(h1, h2, h3, h4, h5, h6),#_form_161_._inline-form .sms_consent_message,#_form_161_._inline-form ._form-thank-you{font-family:Sora;font-size:25px;font-weight:400;color:#2459b5 !important}#_form_161_._inline-form ._form-label,#_form_161_._inline-form ._form-emailidentifier,#_form_161_._inline-form ._form-checkbox-option-label{font-family:Sora;font-size:14px;font-weight:700;line-height:1.6em;color:#2459b5 !important}#_form_161_._inline-form ._submit{margin-top:12px;font-family:Sora;font-size:14px;font-weight:400}#_form_161_._inline-form ._html-code h1,#_form_161_._inline-form ._html-code h2,#_form_161_._inline-form ._html-code h3,#_form_161_._inline-form ._html-code h4,#_form_161_._inline-form ._html-code h5,#_form_161_._inline-form ._html-code h6,#_form_161_._inline-form ._form-title{font-family:Sora;font-size:17px;line-height:normal;font-weight:700;color:#2459b5;margin-bottom:0;display:block}#_form_161_._inline-form ._form-branding{font-family:"IBM Plex Sans", Helvetica, sans-serif;font-size:13px;font-weight:100;font-style:normal;text-decoration:none}#_form_161_:before,#_form_161_:after{content:" ";display:table}#_form_161_:after{clear:both}#_form_161_._inline-style{width:auto;display:inline-block}#_form_161_._inline-style input[type="text"],#_form_161_._inline-style input[type="date"]{padding:10px 12px}#_form_161_._inline-style button._inline-style{position:relative;top:27px}#_form_161_._inline-style p{margin:0}#_form_161_._inline-style ._button-wrapper{position:relative;margin:16px 12.5px 0 20px}#_form_161_ ._form-thank-you{position:relative;left:0;right:0;text-align:center;font-size:18px}#_form_161_ ._form-pc-confirmation ._submit{margin-top:16px}@media (min-width:320px) and (max-width:667px){#_form_161_._inline-form._inline-style ._inline-style._button-wrapper{margin-top:20px !important;margin-left:0 !important}}#_form_161_ .iti{width:100%}#_form_161_ .iti.iti--allow-dropdown.iti--separate-dial-code{width:100%}#_form_161_ .iti input{width:100%;border:#979797 1px solid;border-radius:4px}#_form_161_ .iti--separate-dial-code .iti__selected-flag{background-color:#FFFFFF;border-radius:4px}#_form_161_ .iti--separate-dial-code .iti__selected-flag:hover{background-color:rgba(0, 0, 0, 0.05)}#_form_161_ .iti__country-list{border-radius:4px;margin-top:4px;min-width:460px}#_form_161_ .iti__country-list--dropup{margin-bottom:4px}#_form_161_ .iti__country-list--dropup{margin-bottom:4px}#_form_161_ .phone-error-hidden{display:none}#_form_161_ .phone-error{color:#E40E49}#_form_161_ .phone-input-error{border:1px solid #E40E49 !important}#_form_161_._inline-form ._form-content ._form-list-subscriptions-field fieldset{margin:0;margin-bottom:1.1428571429em;border:none;padding:0}#_form_161_._inline-form ._form-content ._form-list-subscriptions-field fieldset:last-child{margin-bottom:0}#_form_161_._inline-form ._form-content ._form-list-subscriptions-field legend{margin-bottom:1.1428571429em}#_form_161_._inline-form ._form-content ._form-list-subscriptions-field label{display:flex;align-items:flex-start;justify-content:flex-start;margin-bottom:0.8571428571em}#_form_161_._inline-form ._form-content ._form-list-subscriptions-field label:last-child{margin-bottom:0}#_form_161_._inline-form ._form-content ._form-list-subscriptions-field input{margin:0;margin-right:8px}#_form_161_._inline-form ._form-content ._form-list-subscriptions-field ._form-checkbox-option-label{display:block;font-weight:400;margin-top:-4px}#_form_161_._inline-form ._form-content ._form-list-subscriptions-field ._form-checkbox-option-label-with-description{display:block;font-weight:700;margin-top:-4px}#_form_161_._inline-form ._form-content ._form-list-subscriptions-field ._form-checkbox-option-description{margin:0;font-size:0.8571428571em}#_form_161_._inline-form ._form-content ._form-list-subscriptions-field ._form-subscriptions-unsubscribe-all-description{line-height:normal;margin-top:-2px}
          #_form_161_ ._submit{min-height:52px;width:100% !important;background-image:linear-gradient(90deg, #002c42 0%, #0065aa 61%) !important;font-weight:700;text-align:center;text-indent:0px}#_form_161_ ._x13208824 input{text-align:center;min-height:52px;margin:0 auto;display:block;background:transparent;border:1px solid #69727d;border-radius:35px;font:normal 17px "Open Sans";text-align:left;letter-spacing:-0.02em;color:#191919;transition:all ease 0.4s;padding:0 25px}#_form_161_ ._x93138131 input{border:1px solid #69727d;text-align:center;min-height:52px;margin:0 auto;display:block;background:transparent;border-radius:35px;font:normal 17px "Open Sans";text-align:left;letter-spacing:-0.02em;color:#191919;transition:all ease 0.4s;padding:0 25px}#_form_161_ ._x93138131 input::placeholder{color:#c3c3c3;font-weight:normal}#_form_161_ ._x13208824 input::placeholder{font-weight:normal;color:#c3c3c3}#_form_161_ ._x78535980 input::placeholder{font-weight:normal;color:#c3c3c3}#_form_161_ ._x78535980 input{text-align:center;min-height:52px;margin:0 auto;display:block;background:transparent;border:1px solid #69727d;border-radius:35px;font:normal 17px "Open Sans";text-align:left;letter-spacing:-0.02em;color:#191919;transition:all ease 0.4s;padding:0 25px}</style>
          <form method="POST" action="https://digitalnovaaccelerator.activehosted.com/proc.php" id="_form_161_" class="_form _form_161 _inline-form  _dark" novalidate data-styles-version="5">
            <input type="hidden" name="u" value="161" />
            <input type="hidden" name="f" value="161" />
            <input type="hidden" name="s" />
            <input type="hidden" name="c" value="0" />
            <input type="hidden" name="m" value="0" />
            <input type="hidden" name="act" value="sub" />
            <input type="hidden" name="v" value="2" />
            <input type="hidden" name="or" value="2fced50391f5bc0f8735fbc47567971b" />
            <div class="_form-content">
              <div class="_form_element _x93138131 _full_width " >
                <label for="firstname" class="_form-label">
                  Nombre<span class="field-required">
                  *
                </span>
              </label>
              <div class="_field-wrapper">
                <input type="text" id="firstname" name="firstname" placeholder="Nombre" required/>
              </div>
            </div>
            <div class="_form_element _x13208824 _full_width " >
              <label for="email" class="_form-label">
                Tu mejor email<span class="field-required">
                *
              </span>
            </label>
            <div class="_field-wrapper">
              <input type="text" id="email" name="email" placeholder="Email" required/>
            </div>
          </div>
          <div class="_form_element _x46667053 _full_width " >
            <fieldset class="_form-fieldset">
              <div class="_row">
                <legend for="field[21][]" class="_form-label">
                  Política de privacidad<span class="field-required">
                  *
                </span>
              </legend>
            </div>
            <input data-autofill="false" type="hidden" id="field[21][]" name="field[21][]" value="~|">
            <div class="_row _checkbox-radio">
              <input id="field_21Acepto la política de privacidad" type="checkbox" name="field[21][]"
              value="Acepto la política de privacidad" class="any"                                                                                required                                >
              <span>
                <label for="field_21Acepto la política de privacidad">
                  Acepto la política de privacidad
                </label>
              </span>
            </div>
          </fieldset>
        </div>
        <div class="_form_element _x55686670 _full_width _clear" >
        <div class="_html-code">
          <span style="font-size: 10px;">
            <a href="https://evento.escuelacaptacionclientes.com/poltica-de-privacidad-y-cookies" target="_blank" style="font-size: 10px; text-decoration: underline;">
              política de privacidad
            </a>
          </span>
        </div>
      </div>
      <div class="_form_element _x01173083 _full_width " >
      <input type="hidden" name="field[3]" value="" />
      </div>
      <div class="_form_element _x50451526 _full_width " >
      <input type="hidden" name="field[4]" value="" />
      </div>
      <div class="_form_element _x74230052 _full_width " >
      <input type="hidden" name="field[5]" value="" />
      </div>
      <div class="_form_element _x53243427 _full_width " >
      <input type="hidden" name="field[6]" value="" />
      </div>
      <div class="_form_element _x21871276 _full_width " >
      <input type="hidden" name="field[7]" value="" />
      </div>
      <div class="_button-wrapper _full_width">
      <button id="_form_161_submit" class="_submit" type="submit">
        Quiero apuntarme al evento
      </button>
    </div>
    <div class="_clear-element">
    </div>
  </div>
  <div class="_form-thank-you" style="display:none;">
  </div>
  </form>
        `
      }
    }

    // Inject form after component mounts
    const timer = setTimeout(injectForm, 500)
    return () => clearTimeout(timer)
  }, [])

  // Initialize ActiveCampaign form JavaScript
  useEffect(() => {
    const initFormScript = () => {
      if (document.getElementById('_form_161_')) {
        // Define global functions
        (window as any).cfields = {"21":"politica_corta","3":"utm_campaign","4":"utm_source","5":"utm_medium","6":"utm_term","7":"utm_content"};

        // Define _load_script first since it's used in _show_thank_you
        (window as any)._load_script = function(url: string, callback?: () => void, isSubmit?: boolean) {
            const head = document.querySelector('head');
            const script = document.createElement('script');
            let r = false;
            const submitButton = document.querySelector('#_form_161_submit') as HTMLButtonElement;
            script.charset = 'utf-8';
            script.src = url;
            if (callback) {
                script.onload = function() {
                    if (!r) {
                        r = true;
                        callback();
                    }
                };
                (script as any).onreadystatechange = function() {
                    if (!r && (!this.readyState || this.readyState == 'complete')) {
                        r = true;
                        callback();
                    }
                };
            }
            script.onerror = function() {
                if (isSubmit) {
                    if (script.src.length > 10000) {
                        (window as any)._show_error("161", "Lo sentimos, ocurrió un error con el envío. Acorta tus respuestas y vuelve a intentarlo.");
                    } else {
                        (window as any)._show_error("161", "Lo sentimos, ocurrió un error con el envío. Vuelve a intentarlo.");
                    }
                    submitButton.disabled = false;
                    submitButton.classList.remove('processing');
                }
            }

            head!.appendChild(script);
        };

        (window as any)._show_thank_you = function(id: string, message: string, trackcmp_url?: string, email?: string) {
            const form = document.getElementById('_form_' + id + '_');
            const thank_you = form?.querySelector('._form-thank-you');
            if (form && thank_you) {
              (form.querySelector('._form-content') as HTMLElement)!.style.display = 'none';
              thank_you.innerHTML = message;
              (thank_you as HTMLElement).style.display = 'block';
            }
            const vgoAlias = typeof (window as any).visitorGlobalObjectAlias === 'undefined' ? 'vgo' : (window as any).visitorGlobalObjectAlias;
            const visitorObject = (window as any)[vgoAlias];
            if (email && typeof visitorObject !== 'undefined') {
                visitorObject('setEmail', email);
                visitorObject('update');
            } else if (typeof(trackcmp_url) != 'undefined' && trackcmp_url) {
                (window as any)._load_script(trackcmp_url);
            }
            if (typeof (window as any)._form_callback !== 'undefined') (window as any)._form_callback(id);
        };
        ;(window as any)._show_error = function(id: string, message: string, html?: string) {
            const form = document.getElementById('_form_' + id + '_');
            const err = document.createElement('div');
            const button = form?.querySelector('button[type="submit"]');
            const old_error = form?.querySelector('._form_error');
            if (old_error) old_error.parentNode!.removeChild(old_error);
            err.innerHTML = message;
            err.className = '_error-inner _form_error _no_arrow';
            const wrapper = document.createElement('div');
            wrapper.className = '_form-inner _show_be_error';
            wrapper.appendChild(err);
            if (button && button.parentNode) {
                button.parentNode.insertBefore(wrapper, button);
            }
            const submitButton = form!.querySelector('[id^="_form"][id$="_submit"]') as HTMLButtonElement;
            submitButton.disabled = false;
            submitButton.classList.remove('processing');
            if (html) {
                const div = document.createElement('div');
                div.className = '_error-html';
                div.innerHTML = html;
                err.appendChild(div);
            }
        };


        // Initialize form validation and submission
        const form_to_submit = document.getElementById('_form_161_');
        const allInputs = form_to_submit!.querySelectorAll('input, select, textarea');
        let tooltips: { tip: HTMLElement; elem: HTMLInputElement; no_arrow?: boolean }[] = [];
        let submitted = false;

        const getUrlParam = function(name: string) {
            const params = new URLSearchParams(window.location.search);
            return params.get(name) || false;
        };

        // Add event listeners and form functionality
        for (let i = 0; i < allInputs.length; i++) {
            const regexStr = "field\\[(\\d+)\\]";
            const results = new RegExp(regexStr).exec((allInputs[i] as HTMLInputElement).name);
            if (results != undefined) {
                (allInputs[i] as any).dataset.name = (allInputs[i] as HTMLInputElement).name.match(/\[time\]$/)
                    ? `${(window as any).cfields[results[1]]}_time`
                    : (window as any).cfields[results[1]];
            } else {
                (allInputs[i] as any).dataset.name = (allInputs[i] as HTMLInputElement).name;
            }
            const fieldVal = getUrlParam((allInputs[i] as any).dataset.name);

            if (fieldVal) {
                if ((allInputs[i] as any).dataset.autofill === "false") {
                    continue;
                }
                if ((allInputs[i] as HTMLInputElement).type == "radio" || (allInputs[i] as HTMLInputElement).type == "checkbox") {
                    if ((allInputs[i] as HTMLInputElement).value == fieldVal) {
                        (allInputs[i] as HTMLInputElement).checked = true;
                    }
                } else {
                    (allInputs[i] as HTMLInputElement).value = fieldVal;
                }
            }
        }

        const validate_field = function(elem: HTMLInputElement, remove?: boolean) {
            let tooltip: { tip: HTMLElement; elem: HTMLInputElement; no_arrow?: boolean } | null = null;
            const value = elem.value;
            let no_error = true;
            if (remove) {
                remove_tooltip(elem);
            }
            if (elem.type != 'checkbox') elem.className = elem.className.replace(/ ?_has_error ?/g, '');
            if (elem.getAttribute('required') !== null) {
                if (elem.type == 'radio' || (elem.type == 'checkbox' && /any/.test(elem.className))) {
                    const elems = document.getElementsByName(elem.name);
                    if (!(elems instanceof NodeList) || elems.length <= 1) {
                        no_error = (elem as HTMLInputElement).checked;
                    }
                    else {
                        no_error = false;
                        for (let i = 0; i < elems.length; i++) {
                            if ((elems[i] as HTMLInputElement).checked) no_error = true;
                        }
                    }
                    if (!no_error) {
                        tooltip = create_tooltip(elem, "Seleccione una opción.");
                    }
                } else if (elem.type =='checkbox') {
                    const elems = document.getElementsByName(elem.name);
                    let found = false;
                    const err: string[] = [];
                    no_error = true;
                    for (let i = 0; i < elems.length; i++) {
                        if ((elems[i] as HTMLInputElement).getAttribute('required') === null) continue;
                        if (!found && elems[i] !== elem) return true;
                        found = true;
                        elems[i].className = elems[i].className.replace(/ ?_has_error ?/g, '');
                        if (!(elems[i] as HTMLInputElement).checked) {
                            no_error = false;
                            elems[i].className = elems[i].className + ' _has_error';
                            err.push("Es necesario verificar %s".replace("%s", (elems[i] as HTMLInputElement).value));
                        }
                    }
                    if (!no_error) {
                        tooltip = create_tooltip(elem, err.join('<br/>'));
                    }
                } else if (value === undefined || value === null || value === '') {
                    elem.className = elem.className + ' _has_error';
                    no_error = false;
                    tooltip = create_tooltip(elem, "Este campo es obligatorio.");
                }
            }
            if (no_error && elem.name == 'email') {
                if (!value.match(/^[\+_a-z0-9-'&=]+(\.[\+_a-z0-9-']+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i)) {
                    elem.className = elem.className + ' _has_error';
                    no_error = false;
                    tooltip = create_tooltip(elem, "Introduzca una dirección de correo electrónico válida.");
                }
            }
            if (tooltip) {
                resize_tooltip(tooltip);
            }
            return no_error;
        };

        const remove_tooltips = function() {
            for (let i = 0; i < tooltips.length; i++) {
                tooltips[i].tip.parentNode!.removeChild(tooltips[i].tip);
            }
            tooltips = [];
        };

        const remove_tooltip = function(elem: HTMLInputElement) {
            for (let i = 0; i < tooltips.length; i++) {
                if (tooltips[i].elem === elem) {
                    tooltips[i].tip.parentNode!.removeChild(tooltips[i].tip);
                    tooltips.splice(i, 1);
                    return;
                }
            }
        };

        const create_tooltip = function(elem: HTMLInputElement, text: string) {
            const tooltip = document.createElement('div');
            const arrow = document.createElement('div');
            const inner = document.createElement('div');
            const new_tooltip: { tip: HTMLElement; elem: HTMLInputElement; no_arrow?: boolean } = {
                tip: tooltip,
                elem: elem
            };
            if (elem.type != 'radio' && (elem.type != 'checkbox' || elem.name === 'sms_consent')) {
                tooltip.className = '_error';
                arrow.className = '_error-arrow';
                inner.className = '_error-inner';
                inner.innerHTML = text;
                tooltip.appendChild(arrow);
                tooltip.appendChild(inner);
                elem.parentNode!.appendChild(tooltip);
            } else {
                tooltip.className = '_error-inner _no_arrow';
                tooltip.innerHTML = text;
                elem.parentNode!.insertBefore(tooltip, elem);
                new_tooltip.no_arrow = true;
            }
            tooltips.push(new_tooltip);
            return new_tooltip;
        };

        const resize_tooltip = function(tooltip: { tip: HTMLElement; elem: HTMLInputElement; no_arrow?: boolean }) {
            const rect = tooltip.elem.getBoundingClientRect();
            const doc = document.documentElement;
            const scrollPosition = rect.top - ((window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0));
            if (scrollPosition < 40) {
                tooltip.tip.className = tooltip.tip.className.replace(/ ?(_above|_below) ?/g, '') + ' _below';
            } else {
                tooltip.tip.className = tooltip.tip.className.replace(/ ?(_above|_below) ?/g, '') + ' _above';
            }
        };

        const resize_tooltips = function() {
            if (submitted) return;
            for (let i = 0; i < tooltips.length; i++) {
                if (!tooltips[i].no_arrow) resize_tooltip(tooltips[i]);
            }
        };

        const needs_validate = function(el: HTMLInputElement) {
            if(el.getAttribute('required') !== null){
                return true;
            }
            if((el.name === 'email' || el.id === 'phone' || el.id === 'sms_consent') && el.value !== ""){
                return true;
            }
            return false;
        };

        const validate_form = function(e: Event) {
            let no_error = true;
            if (!submitted) {
                submitted = true;
                for (let i = 0, len = allInputs.length; i < len; i++) {
                    const input = allInputs[i] as HTMLInputElement;
                    if (needs_validate(input)) {
                        if (input.type == 'text' || input.type == 'number' || input.type == 'time' || input.type == 'tel') {
                            input.addEventListener('blur', function() {
                                (this as HTMLInputElement).value = (this as HTMLInputElement).value.trim();
                                validate_field(this as HTMLInputElement, true);
                            });
                            input.addEventListener('input', function() {
                                validate_field(this as HTMLInputElement, true);
                            });
                        } else if (input.type == 'radio' || input.type == 'checkbox') {
                            (function(el) {
                                const radios = document.getElementsByName(el.name);
                                for (let i = 0; i < radios.length; i++) {
                                    radios[i].addEventListener('change', function() {
                                        validate_field(el, true);
                                    });
                                }
                            })(input);
                        }
                    }
                }
            }
            remove_tooltips();
            for (let i = 0, len = allInputs.length; i < len; i++) {
                const elem = allInputs[i] as HTMLInputElement;
                if (needs_validate(elem)) {
                    if (elem.tagName.toLowerCase() !== "select") {
                        elem.value = elem.value.trim();
                    }
                    if (!validate_field(elem)) {
                        no_error = false;
                    }
                }
            }
            if (!no_error && e) {
                e.preventDefault();
            }
            resize_tooltips();
            return no_error;
        };

        const _form_serialize = function(form: HTMLFormElement){if(!form||form.nodeName!=="FORM"){return }let i,j;const q=[];for(i=0;i<form.elements.length;i++){if((form.elements[i] as HTMLInputElement).name===""){continue}switch((form.elements[i] as HTMLInputElement).nodeName){case"INPUT":switch((form.elements[i] as HTMLInputElement).type){case"text":case"number":case"date":case"time":case"hidden":case"password":case"button":case"reset":case"submit":q.push((form.elements[i] as HTMLInputElement).name+"="+encodeURIComponent((form.elements[i] as HTMLInputElement).value));break;case"checkbox":case"radio":if((form.elements[i] as HTMLInputElement).checked){q.push((form.elements[i] as HTMLInputElement).name+"="+encodeURIComponent((form.elements[i] as HTMLInputElement).value))}break;case"file":break}break;case"TEXTAREA":q.push((form.elements[i] as HTMLInputElement).name+"="+encodeURIComponent((form.elements[i] as HTMLInputElement).value));break;case"SELECT":switch((form.elements[i] as HTMLSelectElement).type){case"select-one":q.push((form.elements[i] as HTMLSelectElement).name+"="+encodeURIComponent((form.elements[i] as HTMLSelectElement).value));break;case"select-multiple":for(j=0;j<(form.elements[i] as HTMLSelectElement).options.length;j++){if((form.elements[i] as HTMLSelectElement).options[j].selected){q.push((form.elements[i] as HTMLSelectElement).name+"="+encodeURIComponent((form.elements[i] as HTMLSelectElement).options[j].value))}}break}break;case"BUTTON":switch((form.elements[i] as HTMLButtonElement).type){case"reset":case"submit":case"button":q.push((form.elements[i] as HTMLButtonElement).name+"="+encodeURIComponent((form.elements[i] as HTMLButtonElement).value));break}break}}return q.join("&")};

        const form_submit = function(e: Event) {
            e.preventDefault();
            if (validate_form(e) && form_to_submit) {
                const submitButton = e.target as HTMLButtonElement;
                submitButton.disabled = true;
                submitButton.classList.add('processing');
                const form = form_to_submit as HTMLFormElement;
                const serialized = (_form_serialize(form) || '').replace(/%0A/g, '\\n');
                const err = form.querySelector('._form_error');
                if (err) {
                    err.parentNode!.removeChild(err);
                }
                (window as any)._load_script('https://digitalnovaaccelerator.activehosted.com/proc.php?' + serialized + '&jsonp=true', null, true);
            }
            return false;
        };

        if (form_to_submit) {
            form_to_submit.addEventListener('submit', form_submit);
        }
        window.addEventListener('resize', resize_tooltips);
        window.addEventListener('scroll', resize_tooltips);
      }
    };

    // Initialize script after form is injected
    const scriptTimer = setTimeout(initFormScript, 200);
    return () => clearTimeout(scriptTimer);
  }, [])

  const videoTestimonials = [
    {
      id: 1,
      name: "Eloi",
      role: "",
      youtubeId: "4h5BEJ9XhjE", // Mock YouTube ID - replace with real one
      thumbnail: "/1.png", // Local image from public folder
      duration: ""
    },
    {
      id: 2,
      name: "Marta",
      role: "",
      youtubeId: "f4wrCuGjrNg", // Mock YouTube ID - replace with real one
      thumbnail: "/4.png", // Local image from public folder
      duration: ""
    },
    {
      id: 3,
      name: "Palote",
      role: "",
      youtubeId: "JOcZ_Na-x50", // Mock YouTube ID - replace with real one
      thumbnail: "/5.png", // Local image from public folder
      duration: ""
    },
    {
      id: 4,
      name: "Judith",
      role: "",
      youtubeId: "0IaBZAt_xIs", // Mock YouTube ID - replace with real one
      thumbnail: "/3.png", // Local image from public folder
      duration: ""
    },
    {
      id: 5,
      name: "Javi",
      role: "",
      youtubeId: "NvuDZrbXCpU", // Mock YouTube ID - replace with real one
      thumbnail: "/2.png", // Local image from public folder
      duration: ""
    }
  ]





  return (
    <>
      {/* Meta Pixel Code */}
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1316557306362606');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=1316557306362606&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
      {/* End Meta Pixel Code */}

      <div className="min-h-screen bg-white">


      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-[#333333] mb-8  font-spartan"
          >
            Cómo dejar de sentirte perdido en tu trabajo y diseñar en 2 horas tu hoja de ruta para entrar al mundo digital en solo 90 días
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 mb-12 bg-[#076062] text-white p-6 rounded-2xl"
          >
            <p className="text-xl md:text-2xl font-semibold text-center">
              Sin tener que dejar tu empleo ni dar saltos al vacío.
            </p>
            <p className="text-xl md:text-2xl font-semibold text-center">
              Sin necesidad de saber a qué te quieres dedicar.
            </p>
          </motion.div>
        </section>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-[#333333] mb-6 text-center">
              Inscríbete GRATIS al taller de 2 horas
            </h3>
            
            <div id="activecampaign-form-container"></div>

            <p className="text-xs text-gray-500 text-center mt-4">
              100% gratuito. Sin spam. Puedes darte de baja cuando quieras.
            </p>
          </motion.div>

          {/* Hero Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <Image
              src="/MOCKUPPORTATIL.png"
              alt="Taller Digital - Diseña tu hoja de ruta en 2 horas"
              width={375}
              height={500}
              className="max-w-md h-auto rounded-2xl "
              priority
              unoptimized
            />
          </motion.div>
        </div>


        {/* Benefits Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center m-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              ¿Qué conseguirás en este taller?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-[#076062] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">
                Sistema probado
              </h3>
              <p className="text-gray-700">
                Desbloquearás el sistema probado para identificar tus habilidades y crear tu plan de transición profesional al mundo digital
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-[#076062] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">
                Método IAD
              </h3>
              <p className="text-gray-700">
                Aplicarás el Método &quot;Integración, Análisis, Desarrollo&quot; con el que identificarás tus habilidades OCULTAS (las que te harán ganar MUCHO dinero)
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-[#076062] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">
                Hoja de ruta clara
              </h3>
              <p className="text-gray-700">
                Entenderás que PASOS debes dar para cambiar tu vida laboral y vivir del digital en 90 días
              </p>
            </motion.div>
          </div>
        </motion.section>


        {/* About Us Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-12 text-center">
            Soy Carlos Camino 
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Aunque la mayoría me conoce más por mi primer apellido, García, mi segundo es Camino. En gallego se escribe Camiño, que es de donde viene mi familia.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Pasé 14 años en Decathlon, de vendedor a directivo, liderando equipos de más de 100 personas y gestionando proyectos de hasta 20 millones de euros. En esos años descubrí mi verdadera pasión: la selección de talento, conocer a las personas y acompañar tanto su desarrollo personal como el mío propio.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Y por eso creé Nexawork: para ayudar a personas que se sienten atrapadas en trabajos que no les llenan a descubrir sus talentos naturales y transformarlos en profesiones digitales reales, alineadas con lo que quieren y con el estilo de vida que buscan.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                No vendo humo ni promesas fáciles. He creado un programa estructurado, probado y diseñado para que en cuestión de semanas tengas claridad absoluta sobre quién eres, qué se te da bien y en qué profesión digital puedes reinventarte.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Si quieres dar el paso, aquí vas a encontrar las herramientas, el acompañamiento y la experiencia para dejar de conformarte con un trabajo que no encaja contigo y empezar a construir una vida profesional que sí lo haga.
              </p>
            </div>
            
            {/* Right Column - Image */}
            <div className="flex justify-center">
              <Image
                src="/carloscamino.JPG"
                alt="Carlos García Camiño - Fundador de Nexawork"
                width={400}
                height={500}
                className="w-full max-w-sm h-auto rounded-2xl shadow-lg"
                priority
                unoptimized
              />
            </div>
          </div>
        </motion.section>

        {/* Video Testimonials Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] text-center mb-12">
            Lo que dicen nuestros usuarios
          </h2>
          
          <div className="grid grid-cols-5 gap-4 lg:gap-6">
            {videoTestimonials.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl  overflow-hidden cursor-pointer group"
                onClick={() => openVideoModal(video)}
              >
                {/* Video Thumbnail */}
                <div className="relative bg-gray-200">
                  <Image
                    src={video.thumbnail}
                    alt={`Testimonio de ${video.name}`}
                    width={400}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Play Button Overlay*/}
                  <div className="absolute inset-0  bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-300">
                    <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="w-0 h-0 border-l-[12px] border-l-[#076062] border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                   
                  
                </div>
                
                
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Video Modal */}
        {isModalOpen && currentVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={closeVideoModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeVideoModal}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-75 transition-colors"
              >
                ✕
              </button>
              
              {/* YouTube Video */}
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${currentVideo.youtubeId}?autoplay=1&modestbranding=1&rel=0&showinfo=0`}
                  title={`Testimonio de ${currentVideo.name}`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
              {/* Video Info */}
              <div className="p-6">
                <h3 className="font-semibold text-[#333333] text-xl mb-2">
                  {currentVideo.name}
                </h3>
                <p className="text-[#076062]">
                  {currentVideo.role}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-[#076062] text-white rounded-2xl p-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Listo para diseñar tu hoja de ruta digital en 2 horas?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Cientos de personas ya han transformado su vida laboral. Tú puedes ser la siguiente.
          </p>
          <button
            onClick={() => document.getElementById('fullName')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-[#076062] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            RESERVAR MI PLAZA
          </button>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-[#333333] text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Nexawork. Todos los derechos reservados.
          </p>
        </div>
      </footer>
      </div>
    </>
  )
}
