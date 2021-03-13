import React from 'react';
import moment from 'moment';
export const DEFAULT_VIEW_USER = '/admin/radixhaven-home';
export const DEFAULT_VIEW_ADMIN = '/admin/radixhaven-home';

export const yearList = () => {
	let result = [];
	const end = moment().startOf('year');
	const start = moment().subtract(5, 'years');
	while (start.isSameOrBefore(end, 'year')) {
		result.push({
			label: start.year(),
			value: start.year(),
		});
		start.add(1, 'year');
	}

	return result;
};

export const TermsAndConditionTemplate = () => {
	return (
		<div>
			<h5>Highlights:</h5>
			<p style={{ textAlign: 'justify' }}>
				Radix Haven Inc. (&ldquo;Radix Haven&rdquo;) operates the Radix Haven service,
				which we hope You (the &ldquo;Customer&rdquo;, &ldquo;You&rdquo;, or
				&ldquo;Your&rdquo;) use. If You use it, please use it responsibly. If You
				don&rsquo;t, we&rsquo;ll have to terminate Your account.
			</p>
			<p style={{ textAlign: 'justify' }}>
				For paid accounts, you&rsquo;ll be charged on a monthly or yearly basis, depending
				on your selected choice. You can cancel anytime, but there are no refunds.
			</p>
			<p style={{ textAlign: 'justify' }}>
				You own the business data that you provide to Radix Haven and You&rsquo;re
				responsible for keeping it safe. However, we have built a secure environment to
				keep it safe from our end too.&nbsp;&nbsp;
			</p>
			<p style={{ textAlign: 'justify' }}>
				The Terms of Service (the &ldquo;Terms&rdquo;), the Radix Have Service (as defined
				herin), and our prices can change at any time. We&rsquo;ll warn you 30 days in
				advance of any price changes. We&rsquo;ll keep you updated about major changes to
				the Terms or Radix Haven.&nbsp;
			</p>
			<p style={{ textAlign: 'justify' }}>
				That&rsquo;s the basic idea, but you must read through the entire below and agree
				with all the details before you use any of our sites (whether or not You have
				created an account).
			</p>
			<div>
				<h5>Reuse</h5>
				<p style={{ textAlign: 'justify' }}>
					This document is an adaptation of the&nbsp;
					<a href='https://legal.heroku.com/tos'>Heroku Terms of Service</a>, which is
					turn an adaptation of the&nbsp;
					<a href='https://code.google.com/appengine/terms.html'>
						Google App Engine Terms of Service
					</a>
					. The original work has been modified with permission under the&nbsp;
					<a href='https://creativecommons.org/licenses/by/3.0/'>
						Creative Commons Attribution 3.0 License
					</a>
					. Neither Heroku, Inc. nor Google, Inc. is connected with and they do not
					sponsor or endorse Radix Haven or its use of the work.
				</p>
				<p style={{ textAlign: 'justify' }}>
					You&rsquo;re welcome to adapt and use this document for Your own needs. If you
					make an improvement, we&rsquo;d appreciate it if You would let us know so we can
					consider improving our own document.
				</p>
				<h5>Your Agreement with Radix Haven:</h5>
				<p style={{ textAlign: 'justify' }}>
					Your use of the Radix Haven Service is governed by these Terms. The
					&ldquo;Service&rdquo; means the services Radix Haven makes available include our
					web sites (https://radixhaven.com/), our blog, our API, and any other software,
					sites, and services offered by Radix Haven in connection to any of those.
				</p>
				<p style={{ textAlign: 'justify' }}>
					In order to use the Service, You must first agree to the Terms. You understand
					and agree that Radix Haven will treat Your use of the Service as acceptance of
					the Terms from that point onwards.
				</p>
				<p style={{ textAlign: 'justify' }}>
					Radix Haven may make changes to the Terms from time to time. You may reject the
					changes by terminating Your account. You understand and agree that if You use
					the Service after the date on which the Terms have changed, Radix Haven will
					treat Your use as acceptance of the updated Terms.
				</p>
				<p style={{ textAlign: 'justify' }}>
					If you have any question about the Terms, please contact us at
					info@radixhaven.com.
				</p>
				<h5>Your Account</h5>
				<ul className='list-item-footer'>
					<li>
						<p style={{ textAlign: 'justify' }}>
							You may not use the Service if You are a person barred from receiving the
							Service under the laws of the United States or other countries, including
							the country in which You are resident or from which You use the Service.
						</p>
					</li>
					<li>
						<p style={{ textAlign: 'justify' }}>
							You may not use the service unless you are over the age of 13.
						</p>
					</li>
					<li>
						<p style={{ textAlign: 'justify' }}>
							You must be a human. Account created by automated methods are not permitted.
						</p>
					</li>
				</ul>
				<h5>Use of the Service</h5>
				<ul className='list-item-footer'>
					<li>
						<p style={{ textAlign: 'justify' }}>
							You must provide accurate and complete registration information any time You
							register to use the Service.
						</p>
					</li>
					<li>
						<p style={{ textAlign: 'justify' }}>
							You are responsible for the security of Your passwords and for any use of
							Your account.
						</p>
					</li>
					<li>
						<p style={{ textAlign: 'justify' }}>
							Your use of the Service must comply with all applicable laws, regulations
							and ordinances.
						</p>
					</li>
					<li>
						<p style={{ textAlign: 'justify' }}>
							You agree to not engage in any activity that interferes with or disrupts the
							Service.
						</p>
					</li>
					<li>
						<p style={{ textAlign: 'justify' }}>
							Radix Haven reserves the right to enforce quotas and usage limits (to any
							resources, including the API) at its sole discretion, with or without
							notice, which may result in Radix Haven disabling or throttling Your usage
							of the Service for any amount of time.
						</p>
					</li>
					<li>
						<p style={{ textAlign: 'justify' }}>
							You may not allow multiple people to use the same account or otherwise
							access the Service in a manner intended to avoid incurring fees.
						</p>
					</li>
				</ul>
				<h5>Service Policies and Privacy</h5>
				<p style={{ textAlign: 'justify' }}>
					The Service shall be subject to the privacy policy for the Service available at
					https://radixhaven.com/privacy (the &ldquo;Privacy Policy&rdquo;), which are
					hereby expressly incorporated into the Terms of Service by reference. You agree
					to the use of Your data in accordance with Radix Haven&rsquo; Privacy Policy.
				</p>
				<h5>Fees for Use of the Service</h5>
				<ul className='list-item-footer'>
					<li>
						<p style={{ textAlign: 'justify' }}>
							The Service may be provided to You without charge up with certain limits or
							for a certain &ldquo;trial&rdquo; period of time.
						</p>
					</li>
					<li>
						<p style={{ textAlign: 'justify' }}>
							Usage over this limit (or after the &ldquo;trial&rdquo; period) or requires
							Your purchase of additional resources or services.
						</p>
					</li>
					<li>
						<p style={{ textAlign: 'justify' }}>
							For all purchased resources and services, we will charge Your credit card on
							a monthly basis.
						</p>
					</li>
					<li>
						<p style={{ textAlign: 'justify' }}>
							Payments are non-refundable. There will be no refunds or credits for partial
							months of service, upgrade/downgrade refunds, or refunds for months unused
							with an open account.
						</p>
					</li>
					<li>
						<p style={{ textAlign: 'justify' }}>
							Charges are solely based on Radix Haven&rsquo;s measurements of Your use of
							the Service, unless otherwise agreed to in writing.
						</p>
					</li>
					<li>
						<p style={{ textAlign: 'justify' }}>
							All fees are exclusive of all taxes, levies, or duties imposed by taxing
							authorities, and You shall be responsible for payment of all such taxes,
							levies, or duties.
						</p>
					</li>
					<li>
						<p style={{ textAlign: 'justify' }}>
							You acknowledge and agree that any credit card and related billing and
							payment information that You provide to Radix Haven may be shared by Radix
							Haven with companies who work on Radix Haven&rsquo;s behalf, such as payment
							processors and/or credit agencies, solely for the purposes of checking
							credit, effecting payment to Radix Haven and servicing Your account.
						</p>
					</li>
					<li>
						<p style={{ textAlign: 'justify' }}>
							Radix Haven may change its fees and payment policies for the Service by
							notifying You at least thirty (30) days before the beginning of the billing
							cycle in which such change will take effect.
						</p>
					</li>
				</ul>
				<h5>Cancellation and Termination</h5>
				<ul className='list-item-footer'>
					<li>
						<p style={{ textAlign: 'justify' }}>
							You must cancel Your account via support request at support@radixhaven.com.
							Any other emails or phone requests to cancel Your account will not be
							considered a cancellation.
						</p>
					</li>
					<li>
						<p style={{ textAlign: 'justify' }}>
							You will not receive any refunds if You cancel Your account.
						</p>
					</li>
					<li>
						<p style={{ textAlign: 'justify' }}>
							If You cancel the Service before the end of Your current paid up month, Your
							cancellation will take effect immediately and You will not be charged again.
						</p>
					</li>
					<li>
						<p style={{ textAlign: 'justify' }}>
							You agree that Radix Haven , in its sole discretion and for any or no
							reason, may terminate or suspend Your account. You agree that any
							termination of Your access to the Service may be without prior notice, and
							You agree that Radix Haven will not be liable to You or any third party for
							such termination.
						</p>
					</li>
				</ul>
				<h5>Ideas and Feedback</h5>
				<p style={{ textAlign: 'justify' }}>
					You may choose to or we may invite You to submit comments or ideas about the
					Service, including but not limited to ideas about improving the Service or our
					products (&ldquo;Ideas&rdquo;). By submitting any Idea, You agree that Your
					disclosure is unsolicited and without restriction and will not place Radix Haven
					under any fiduciary or other obligation, and that we are free to use the Idea
					without any additional compensation to You, and/or to disclose the Idea on a
					non-confidential basis or otherwise to anyone.
				</p>
				<h5>Modification of the Service</h5>
				<ul className='list-item-footer'>
					<li>
						<p style={{ textAlign: 'justify' }}>
							You acknowledge and agree that the Service may change from time to time
							without prior notice to You.
						</p>
					</li>
					<li>
						<p style={{ textAlign: 'justify' }}>
							Changes include, without limitation, changes to fee and payment policies,
							security patches, added or removed functionality, and other enhancements or
							restrictions.
						</p>
					</li>
					<li>
						<p style={{ textAlign: 'justify' }}>
							Radix Haven shall not be liable to you or to any third party for any
							modification, price change, suspension or discontinuance of the Service.
						</p>
					</li>
				</ul>
				<h5>External Resources</h5>
				<p style={{ textAlign: 'justify' }}>
					The Service may include hyperlinks to other web sites or content or resources or
					email content. You acknowledge and agree that Radix Haven is not responsible for
					the availability of any such external sites or resources, and does not endorse
					any advertising, products or other materials on or available from such web sites
					or resources.
				</p>
				<h5>License from Radix Haven and Restrictions</h5>
				<p style={{ textAlign: 'justify' }}>
					All of the content available on or through the Service, including without
					limitation, text, photographs, graphics, logos, trade/service marks, and/or
					audiovisual content, is owned and/or controlled by Radix Haven, or other
					licensors or Service users and is protected, as applicable, by copyright,
					trademark, trade dress, patent, and trade secret laws, other proprietary rights,
					and international treaties. You acknowledge that the Service and any underlying
					technology or software used in connection with the Service contain our
					proprietary information.
				</p>
				<p style={{ textAlign: 'justify' }}>
					Subject to and conditioned upon Your compliance with these Terms, we grant to
					you a personal, worldwide, royalty-free, non-assignable and non-exclusive
					license to use the software provided to You by Radix Haven as part of the
					Service as provided to You by Radix Haven. This license is for the sole purpose
					of enabling You to use and enjoy the benefit of the Service as provided by Radix
					Haven, in the manner permitted by the Terms.
				</p>
				<p style={{ textAlign: 'justify' }}>
					You may not (and You may not permit anyone else to): (a) copy, modify, create a
					derivative work of, reverse engineer, decompile or otherwise attempt to extract
					the source code of the Service or any part thereof, unless this is expressly
					permitted or required by law, or unless You have been specifically told that You
					may do so by Radix Haven, in writing (e.g., through an open source software
					license); or (b) attempt to disable or circumvent any security mechanisms used
					by the Service.
				</p>
				<p style={{ textAlign: 'justify' }}>
					Open source software licenses for components of the Service released under an
					open source license constitute separate written agreements. To the limited
					extent that the open source software licenses expressly supersede these Terms,
					the open source licenses govern Your agreement with Radix Haven for the use of
					the components of the Service released under an open source license.
				</p>
				<p style={{ textAlign: 'justify' }}>
					You may not use the Service in any manner that could damage, disable, overburden
					or impair our servers or networks, or interfere with any other users&rsquo; use
					or enjoyment of the Service.
				</p>
				<p style={{ textAlign: 'justify' }}>
					You may not attempt to gain unauthorized access to any of the Service, member
					accounts, or computer systems or networks, through hacking, password mining or
					any other means.
				</p>
				<p style={{ textAlign: 'justify' }}>
					Without limiting anything else contained herein, You agree that You shall not
					(and You agree not to allow any third party to):
				</p>
				<ul className='list-item-footer'>
					<li>
						<p style={{ textAlign: 'justify' }}>
							remove any notices of copyright, trademark or other proprietary rights
							contained in/on or accessible through the Service or in any content or other
							material obtained via the Service;
						</p>
					</li>
					<li>
						<p style={{ textAlign: 'justify' }}>
							use any robot, spider, website search/retrieval application, or other
							automated device, process or means to access, retrieve or index any portion
							of the Service;
						</p>
					</li>
					<li>
						<p style={{ textAlign: 'justify' }}>
							reformat or frame any portion of the web pages that are part of the Service;
						</p>
					</li>
					<li>
						<p style={{ textAlign: 'justify' }}>
							use the Service for commercial purposes not permitted under these Terms;
						</p>
					</li>
					<li>
						<p style={{ textAlign: 'justify' }}>
							create user accounts by automated means or under false or fraudulent
							pretenses;
						</p>
					</li>
					<li>
						<p style={{ textAlign: 'justify' }}>
							attempt to defeat any security or verification measure relating to the
							Service;
						</p>
					</li>
					<li>
						<p style={{ textAlign: 'justify' }}>
							provide or use tracking or monitoring functionality in connection with the
							Service, including, without limitation, to identify other users&rsquo;
							actions or activities;
						</p>
					</li>
					<li>
						<p style={{ textAlign: 'justify' }}>
							impersonate or attempt to impersonate Radix Haven or any employee,
							contractor or associate of Radix Haven, or any other person or entity; or
						</p>
					</li>
					<li>
						<p style={{ textAlign: 'justify' }}>
							collect or store personal data about other users in connection with the
							prohibited activities described in this paragraph.
						</p>
					</li>
				</ul>
				<h5>Our Copyright Dispute Policy</h5>
				<p style={{ textAlign: 'justify' }}>
					Radix Haven respects the intellectual property of others and requires that our
					users do the same. It is our policy to terminate the membership of repeat
					infringers. If You believe that material or content residing on or accessible
					through the Service infringes a copyright, please send a notice of copyright
					infringement containing the following information to the Designated Copyright
					Agent listed below:
				</p>
				<ul className='list-item-footer'>
					<li>
						<p style={{ textAlign: 'justify' }}>
							identification of the copyrighted work claimed to have been infringed, or,
							if multiple copyrighted works are covered by a single notification, a
							representative list of such works;
						</p>
					</li>
					<li>
						<p style={{ textAlign: 'justify' }}>
							identification of the claimed infringing material and information reasonably
							sufficient to permit us to locate the material on the Radix Haven Service
							(providing the URL(s) of the claimed infringing material satisfies this
							requirement);
						</p>
					</li>
					<li>
						<p style={{ textAlign: 'justify' }}>
							information reasonably sufficient to permit us to contact You, such as an
							address, telephone number, and an email address;
						</p>
					</li>
					<li>
						<p style={{ textAlign: 'justify' }}>
							a statement by You that You have a good faith belief that the disputed use
							is not authorized by the copyright owner, its agent, or the law;
						</p>
					</li>
					<li>
						<p style={{ textAlign: 'justify' }}>
							a statement by You, made under penalty of perjury, that the above
							information in Your notification is accurate and that You are the copyright
							owner or are authorized to act on the copyright owner&rsquo;s behalf; and
						</p>
					</li>
					<li>your physical or electronic signature.</li>
				</ul>
				<p style={{ textAlign: 'justify' }}>
					Our Designated Copyright Agent for notification of claimed infringement can be
					reached at Radix Haven, Inc., Attn: Copyright Infringement, 820 Lincoln Ave,
					Alameda, CA 94501, (628) 245-5777, info@radixhaven.com
				</p>
				<h5>Links to Other Websites</h5>
				<p style={{ textAlign: 'justify' }}>
					The Service may contain advertisements and/or links to other websites
					(&ldquo;Third Party Sites&rdquo;). Radix Haven does not endorse, sanction or
					verify the accuracy or ownership of the information contained in/on any Third
					Party Site or any products or services advertised on Third Party Sites. If You
					decide to leave the Site and navigate to Third Party Sites, or install any
					software or download content from any such Third Party Sites, You do so at Your
					own risk. Once You access a Third Party Site through a link on our Site, You may
					no longer be protected by these Terms of Service and You may be subject to the
					terms and conditions of such Third Party Site. You should review the applicable
					policies, including privacy and data gathering practices, of any Third Party
					Site to which You navigate from the Site, or relating to any software You use or
					install from a Third Party Site. Concerns regarding a Third Party Site should be
					directed to the Third Party Site itself. Radix Haven bears no responsibility for
					any action associated with any Third Party Site.
				</p>
				<h5>Disclaimer of Warranties</h5>
				<p style={{ textAlign: 'justify' }}>
					IF YOU ACCESS THE SERVICE, YOU DO SO AT YOUR OWN RISK. WE PROVIDE THE SERVICE
					&ldquo;AS IS&rdquo;, &ldquo;WITH ALL FAULTS&rdquo; AND &ldquo;AS
					AVAILABLE.&rdquo; WE MAKE NO EXPRESS OR IMPLIED WARRANTIES OR GUARANTEES ABOUT
					THE SERVICE. TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE HEREBY DISCLAIM ALL SUCH
					WARRANTIES, INCLUDING ALL STATUTORY WARRANTIES, WITH RESPECT TO THE SERVICE,
					INCLUDING WITHOUT LIMITATION ANY WARRANTIES THAT THE SERVICE IS MERCHANTABLE, OF
					SATISFACTORY QUALITY, ACCURATE, FIT FOR A PARTICULAR PURPOSE OR NEED, OR
					NON-INFRINGING. WE DO NOT GUARANTEE THAT THE RESULTS THAT MAY BE OBTAINED FROM
					THE USE OF THE SERVICE WILL BE EFFECTIVE, RELIABLE OR ACCURATE OR WILL MEET YOUR
					REQUIREMENTS. WE DO NOT GUARANTEE THAT YOU WILL BE ABLE TO ACCESS OR USE THE
					SERVICE (EITHER DIRECTLY OR THROUGH THIRD-PARTY NETWORKS) AT TIMES OR LOCATIONS
					OF YOUR CHOOSING. WE ARE NOT RESPONSIBLE FOR THE ACCURACY, RELIABILITY,
					TIMELINESS OR COMPLETENESS OF INFORMATION PROVIDED BY ANY OTHER USERS OF THE
					SERVICE OR ANY OTHER DATA OR INFORMATION PROVIDED OR RECEIVED THROUGH THE
					SERVICE. EXCEPT AS EXPRESSLY SET FORTH HEREIN, RADIX HAVEN MAKES NO WARRANTIES
					ABOUT THE INFORMATION SYSTEMS, SOFTWARE AND FUNCTIONS MADE ACCESSIBLE BY OR
					THROUGH THE SERVICE OR ANY SECURITY ASSOCIATED WITH THE TRANSMISSION OF
					SENSITIVE INFORMATION.&nbsp;RADIX HAVEN&nbsp;DOES NOT WARRANT THAT THE SERVICE
					WILL OPERATE ERROR-FREE, THAT ERRORS IN THE SERVICE WILL BE FIXED, THAT LOSS OF
					DATA WILL NOT OCCUR, OR THAT THE SERVICE OR SOFTWARE ARE FREE OF COMPUTER
					VIRUSES, CONTAMINANTS OR OTHER HARMFUL ITEMS. UNDER NO CIRCUMSTANCES
					WILL&nbsp;RADIX HAVEN, ANY OF OUR AFFILIATES, DISTRIBUTORS, PARTNERS, LICENSORS,
					AND/OR ANY OF OUR OR THEIR DIRECTORS, OFFICERS, EMPLOYEES, CONSULTANTS, AGENTS,
					OR OTHER REPRESENTATIVES BE LIABLE FOR ANY LOSS OR DAMAGE CAUSED BY YOUR
					RELIANCE ON INFORMATION OBTAINED THROUGH THE SERVICE.
				</p>
				<h5>Limitations on Liability</h5>
				<p style={{ textAlign: 'justify' }}>
					YOUR SOLE AND EXCLUSIVE REMEDY FOR ANY DISPUTE WITH US IS THE CANCELLATION OF
					YOUR REGISTRATION. IN NO EVENT SHALL OUR TOTAL CUMULATIVE LIABILITY TO YOU FOR
					ANY AND ALL CLAIMS RELATING TO OR ARISING OUT OF YOUR USE OF THE SERVICE,
					REGARDLESS OF THE FORM OF ACTION, EXCEED THE GREATER OF: (A) THE TOTAL AMOUNT OF
					FEES, IF ANY, THAT YOU PAID TO UTILIZE THE SERVICE OR (B) ONE HUNDRED DOLLARS
					($100). IN NO EVENT SHALL WE BE LIABLE TO YOU (OR TO ANY THIRD PARTY CLAIMING
					UNDER OR THROUGH YOU) FOR ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL,
					CONSEQUENTIAL, PUNITIVE OR EXEMPLARY DAMAGES OR ANY BODILY INJURY, EMOTIONAL
					DISTRESS, DEATH OR ANY OTHER DAMAGES ARISING FROM YOUR USE OF OR INABILITY TO
					USE THE SERVICE, WHETHER ON-LINE OR OFF-LINE, OR OTHERWISE IN CONNECTION WITH
					THE SERVICE. THESE EXCLUSIONS APPLY TO ANY CLAIMS FOR LOST PROFITS, LOST DATA,
					LOSS OF GOODWILL OR BUSINESS REPUTATION, COST OF PROCUREMENT OF SUBSTITUTE GOODS
					OR SERVICES, WORK STOPPAGE, COMPUTER FAILURE OR MALFUNCTION, ANY OTHER
					COMMERCIAL DAMAGES OR LOSSES, OR ANY PERSONAL INJURY OR PROPERTY DAMAGES, EVEN
					IF WE KNEW OR SHOULD HAVE KNOWN OF THE POSSIBILITY OF SUCH DAMAGES. BECAUSE SOME
					STATES OR JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR THE LIMITATION OF
					LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, IN SUCH STATES OR
					JURISDICTIONS, OUR LIABILITY SHALL BE LIMITED TO THE EXTENT PERMITTED BY LAW. IF
					YOU ARE A CALIFORNIA RESIDENT, YOU WAIVE YOUR RIGHTS WITH RESPECT TO CALIFORNIA
					CIVIL CODE SECTION 1542, WHICH SAYS &ldquo;A GENERAL RELEASE DOES NOT EXTEND TO
					CLAIMS WHICH THE CREDITOR DOES NOT KNOW OR SUSPECT TO EXIST IN HIS FAVOR AT THE
					TIME OF EXECUTING THE RELEASE, WHICH, IF KNOWN BY HIM MUST HAVE MATERIALLY
					AFFECTED HIS SETTLEMENT WITH THE DEBTOR.&rdquo;
				</p>
				<h5>Indemnification</h5>
				<p style={{ textAlign: 'justify' }}>
					You agree to hold harmless and indemnify Radix Haven, and its subsidiaries,
					affiliates, officers, agents, employees, advertisers, licensors, suppliers or
					partners from and against any third party claim arising from or in any way
					related to (a) Your breach of the Terms, (b) Your use of the Service, or (c)
					Your violation of applicable laws, rules or regulations in connection with the
					Service, including any liability or expense arising from all claims, losses,
					damages (actual and consequential), suits, judgments, litigation costs and
					attorneys&rsquo; fees, of every kind and nature. In such a case, Radix Haven
					will provide You with written notice of such claim, suit or action.
				</p>
				<h5>Choice of Law and Dispute Resolution</h5>
				<p style={{ textAlign: 'justify' }}>
					The Terms of Service shall be deemed to have been entered into and shall be
					construed and enforced in accordance with the laws of the State of Alabama as
					applied to contracts made and performed entirely within Alabama, without giving
					effect to any conflicts of law statutes. Any controversy, dispute or claim
					arising out of or related to the Terms, the Privacy Policy or the Service shall
					be settled by final and binding arbitration to be conducted by an arbitration
					tribunal in the State of Alabama and the County of Shelby, pursuant to the rules
					of the American Arbitration Association. Any and all disputes that You may have
					with Radix Haven shall be resolved individually, without resort to any form of
					class action.
				</p>
				<h5>General Legal Terms</h5>
				<p style={{ textAlign: 'justify' }}>
					The Terms, including the Privacy Policy, constitute the whole legal agreement
					between You and Radix Haven and govern Your use of the Service and completely
					replace any prior agreements between You and Radix Haven in relation to the
					Service.
				</p>
				<p style={{ textAlign: 'justify' }}>
					If any part of the Terms is held invalid or unenforceable, that portion shall be
					construed in a manner consistent with applicable law to reflect, as nearly as
					possible, the original intentions of the parties, and the remaining portions
					shall remain in full force and effect.
				</p>
				<p style={{ textAlign: 'justify' }}>
					The failure of Radix Haven to exercise or enforce any right or provision of the
					Terms shall not constitute a waiver of such right or provision. The failure of
					either party to exercise in any respect any right provided for herein shall not
					be deemed a waiver of any further rights hereunder.
				</p>
				<p style={{ textAlign: 'justify' }}>
					You agree that if Radix Haven does not exercise or enforce any legal right or
					remedy which is contained in the Terms (or which&nbsp;Radix Haven&nbsp;&nbsp;has
					the benefit of under any applicable law), this will not be taken to be a formal
					waiver of&nbsp;Radix Haven&rsquo;s rights and that those rights or remedies will
					still be available to&nbsp;Radix Haven&nbsp;.
				</p>
				<p style={{ textAlign: 'justify' }}>
					Radix Haven&nbsp;shall not be liable for failing or delaying performance of its
					obligations resulting from any condition beyond its reasonable control,
					including but not limited to, governmental action, acts of terrorism,
					earthquake, fire, flood or other acts of God, labor conditions, power failures,
					and Internet disturbances.
				</p>
				<p style={{ textAlign: 'justify' }}>
					We may assign this contract at any time to any parent, subsidiary, or any
					affiliated company, or as part of the sale to, merger with, or other transfer of
					our company to another entity.
				</p>
			</div>
			{/* {terms.information && (
							<div
								className='modal-body'
								dangerouslySetInnerHTML={{ __html: getHtml(terms.information) }}
							/>
						)} */}
		</div>
	);
};

export const PrivacyTemplate = () => {
	return (
		<div>
			<h5>Highlights:</h5>
			<p style={{ textAlign: 'justify' }}>
				Radix Haven Inc. (&ldquo;Radix Haven&rdquo;) will collect certain non-personally
				identifiable information about you as you use our sites. We may use this data to
				better understand our users. We can also publish this data, but the data will be
				about a large group of users, not individuals. We may also collect certain
				personal information about you and your use of the Service (as defined herein)
				which may be published and used in the aggregate as set forth in this Privacy
				Policy.
			</p>
			<p style={{ textAlign: 'justify' }}>
				We will also ask you to provide personal information, but you&rsquo;ll always be
				able to opt out. If you give us personal information, we won&rsquo;t do anything
				evil with it.
			</p>
			<p style={{ textAlign: 'justify' }}>
				We can also use cookies, but you can choose not to store these.
			</p>
			<p style={{ textAlign: 'justify' }}>
				That&rsquo;s the basic idea, but you must read through the entire Privacy Policy
				below and agree with all the details before you use any of our sites.
			</p>
			<h5>EU-U.S. Privacy Shield Framework</h5>
			<p style={{ textAlign: 'justify' }}>
				Radix Haven&nbsp;adheres to the EU-U.S. Privacy Shield Framework as set forth by
				the U.S. Department of Commerce regarding the collection, use, and retention of
				personal information transferred from the European Union to the United States.
				Upon notification by the Privacy Shield team,&nbsp;Radix Haven&nbsp;will update
				this Policy. &nbsp;Please see our Privacy Shield Policy at&nbsp;
				<a href='https://baremetrics.com/privacy-shield'>
					https://radixhaven.com/privacy-shield
				</a>
				.
			</p>
			<p style={{ textAlign: 'justify' }}>
				To learn more about the Privacy Shield program, and to view our certification once
				it is complete, please visit&nbsp;
				<a href='https://www.privacyshield.gov/'>https://www.privacyshield.gov/</a>.
			</p>
			<h5>Reuse</h5>
			<p style={{ textAlign: 'justify' }}>
				This document is based upon the Automattic Privacy Policy and is licensed under
				Creative Commons Attribution Share-Alike License 2.5. Basically, this means you
				can use it verbatim or edited, but you must release new versions under the same
				license and you have to credit Automattic somewhere (like this!). Automattic is
				not connected with and does not sponsor or endorse&nbsp;Radix Haven&nbsp;or its
				use of the work.
			</p>
			<p style={{ textAlign: 'justify' }}>
				Radix Haven&nbsp;makes available services include our web sites (
				<a href='https://baremetrics.com/'>https://radixhaven.com</a>&nbsp;(the
				&ldquo;Site&rdquo;)), our blog, our API, and any other software, sites, and
				services offered by Radix Haven in connection to any of those (taken together, the
				&ldquo;Service&rdquo;). It is Radix Haven&rsquo;s policy to respect your privacy
				regarding any information we may collect while operating our Site.
			</p>
			<h5>Questions</h5>
			<p style={{ textAlign: 'justify' }}>
				If you have question about this Privacy Policy, please contact us at&nbsp;
				<a href='mailto:support@baremetrics.com'>support@radixhaven.com</a>
			</p>
			<h5>Visitors</h5>
			<p style={{ textAlign: 'justify' }}>
				Like most website operators,&nbsp;Radix Haven&nbsp;collects
				non-personally-identifying information of the sort that web browsers and servers
				typically make available, such as the browser type, language preference, referring
				site, and the date and time of each visitor request.&nbsp;Radix Haven&rsquo;s
				purpose in collecting non-personally identifying information is to better
				understand how&nbsp;Radix Haven&rsquo;s visitors use its website. From time to
				time,&nbsp;Radix Haven&nbsp;may release non-personally-identifying information in
				the aggregate, e.g., by publishing a report on trends in the usage of its website.
			</p>
			<p style={{ textAlign: 'justify' }}>
				Radix Haven&nbsp;also collects potentially personally-identifying information like
				Internet Protocol (IP) addresses.&nbsp;Radix Haven&nbsp;does not use such
				information to identify its visitors, however, and does not disclose such
				information, other than under the same circumstances that it uses and discloses
				personally-identifying information, as described below. We may also collect and
				use IP addresses to block users who violated our Terms of Service.
			</p>
			<h5>Gathering of Personally-Identifying Information</h5>
			<p style={{ textAlign: 'justify' }}>
				Certain visitors to&nbsp;Radix Haven&rsquo;s websites choose to interact
				with&nbsp;Radix Haven&nbsp;in ways that require&nbsp;Radix Haven&nbsp;to gather
				personally-identifying information. The amount and type of information
				that&nbsp;Radix Haven&nbsp;gathers depends on the nature of the
				interaction.&nbsp;Radix Haven&nbsp;collects such information only insofar as is
				necessary or appropriate to fulfill the purpose of the visitor&rsquo;s interaction
				with&nbsp;Radix Haven.&nbsp;Radix Haven&nbsp;does not disclose
				personally-identifying information other than as described below. And visitors can
				always refuse to supply personally-identifying information, with the caveat that
				it may prevent them from engaging in certain Service-related activities.
			</p>
			<p style={{ textAlign: 'justify' }}>
				Additionally, some interactions, such as posting a comment, may ask for optional
				personal information. For instance, when posting a comment, may provide a website
				that will be displayed along with a user&rsquo;s name when the comment is
				displayed. Supplying such personal information is completely optional and is only
				displayed for the benefit and the convenience of the user.
			</p>
			<h5>Aggregated Statistics and Third Party Analytics Providers</h5>
			<p style={{ textAlign: 'justify' }}>
				Radix Haven&nbsp;may collect statistics about the behavior of visitors to and
				users of the Service. For instance,&nbsp;Radix Haven&nbsp;may monitor the most
				popular parts of the&nbsp;Radix Haven&nbsp;Site.&nbsp;Radix Haven&nbsp;may display
				this information in the aggregate publicly or provide it to others.
			</p>
			<p style={{ textAlign: 'justify' }}>
				In addition,&nbsp;Radix Haven&nbsp;may, from time to time, collect certain
				personal information from you, your use of the Services, and/or the users of your
				website, such as your user churn rate, your financial data and revenue, your
				conversation rates and other metrics (your &ldquo;Data&rdquo;).&nbsp;Radix
				Haven&nbsp;may publish and display your Data in the aggregate to the public
				through our Site or on our blog, e.g. by publishing a report on average churn
				rates on the Site. However, all Data is only used and published in the aggregate
				which means that any published Data will not identify you, your website, your
				company or your users, or link you to the published information in any way. If you
				wish to opt out of the publication of your Data, please contact us as
				info@radixhaven.com.
			</p>
			<p style={{ textAlign: 'justify' }}>
				Radix Haven&nbsp;may also use third party analytics providers and products, such
				as Amazon (collectively, &ldquo;Third Party Providers&rdquo;), to obtain, compile
				and analyze information (that may include personally-identifying information)
				about how users are using and interacting with&nbsp;Radix Haven&nbsp;and/or the
				Services. Such information is compiled in the aggregate and anonymized (i.e. the
				aggregated data will not personally identify users in any way) and provided to
				Third Party Providers for analytics purposes only (e.g. obtaining statistics and
				other information about how users are using and interacting with&nbsp;Radix
				Haven). These Third Party Providers may use a variety of established or new
				technologies or tools (including, without limitation, cookies, web beacons, HTTP
				cache, local shared objects and persistent identifiers) to recognize your computer
				or device and/or to collect or compile this information. You understand and
				acknowledge that&nbsp;Radix Haven&nbsp;has no control over the technologies, tools
				or practices of the Third Party Providers providing analytics products and
				services to&nbsp;Radix Haven.
			</p>
			<p style={{ textAlign: 'justify' }}>
				Radix Haven&nbsp;does not disclose personally-identifying information other than
				as described below.
			</p>
			<h5>Protection of Certain Personally-Identifying Information</h5>
			<p style={{ textAlign: 'justify' }}>
				Radix Haven&nbsp;discloses potentially personally-identifying and
				personally-identifying information only to those of its employees, contractors and
				affiliated organizations that (i) need to know that information in order to
				process it on&nbsp;Radix Haven&rsquo; behalf or to provide services available
				at&nbsp;Radix Haven&rsquo; Site websites, and (ii) that have agreed not to
				disclose it to others. Some of those employees, contractors and affiliated
				organizations may be located outside of your home country; by using the Service,
				you consent to the transfer of such information to them.&nbsp;Radix
				Haven&nbsp;will not rent or sell potentially personally-identifying and
				personally-identifying information to anyone. Other than to its employees,
				contractors and affiliated organizations, as described above,&nbsp;Radix
				Haven&nbsp;discloses potentially personally-identifying and personally-identifying
				information only when required to do so by law, or when&nbsp;Radix
				Haven&nbsp;believes in good faith that disclosure is reasonably necessary to
				protect the property or rights of&nbsp;Radix Haven, third parties or the public at
				large. If you are a registered user of the Service and have supplied your email
				address,&nbsp;Radix Haven&nbsp;may occasionally send you an email to tell you
				about new features, solicit your feedback, or just keep you up to date with
				what&rsquo;s going on with&nbsp;Radix Haven&nbsp;and our products. We primarily
				use our website and blog to communicate this type of information, so we expect to
				keep this type of email to a minimum. If you send us a request (for example via a
				support email or via one of our feedback mechanisms), we reserve the right to
				publish it in order to help us clarify or respond to your request or to help us
				support other users.&nbsp;Radix Haven&nbsp;takes all measures reasonably necessary
				to protect against the unauthorized access, use, alteration or destruction of
				potentially personally-identifying and personally-identifying information.
			</p>
			<h5>Cookies</h5>
			<p style={{ textAlign: 'justify' }}>
				A cookie is a string of information that a website stores on a visitor&rsquo;s
				computer, and that the visitor&rsquo;s browser provides to the Service each time
				the visitor returns.&nbsp;Radix Haven&nbsp;uses cookies to help&nbsp;Radix
				Haven&nbsp;identify and track visitors, their usage of&nbsp;Radix
				Haven&nbsp;Service, and their Service access preferences.&nbsp;Radix
				Haven&nbsp;visitors who do not wish to have cookies placed on their computers
				should set their browsers to refuse cookies before using&nbsp;Radix Haven&rsquo;s
				websites, with the drawback that certain features of&nbsp;Radix Haven&rsquo;s
				websites may not function properly without the aid of cookies.
			</p>
			<h5>Business Transfers</h5>
			<p style={{ textAlign: 'justify' }}>
				If&nbsp;Radix Haven, or substantially all of its assets, were acquired, or in the
				unlikely event that&nbsp;Radix Haven&nbsp;goes out of business or enters
				bankruptcy, user information would be one of the assets that is transferred or
				acquired by a third party. You acknowledge that such transfers may occur, and that
				any acquirer of&nbsp;Radix Haven&nbsp;may continue to use your personal
				information as set forth in this policy.
			</p>
			<h5>Data Storage</h5>
			<p style={{ textAlign: 'justify' }}>
				Radix Haven&nbsp;uses third party vendors and hosting partners to provide the
				necessary hardware, software, networking, storage, and related technology required
				to run the Service. You understand that although you retain full rights to your
				data, it may be stored on third party storage and transmitted through third party
				networks.
			</p>
			<h5>Privacy Policy Changes</h5>
			<p style={{ textAlign: 'justify' }}>
				Although most changes are likely to be minor,&nbsp;Radix Haven&nbsp;may change its
				Privacy Policy from time to time, and in&nbsp;Radix Haven&rsquo;s sole
				discretion.&nbsp;Radix Haven&nbsp;encourages visitors to frequently check this
				page for any changes to its Privacy Policy.
			</p>
			<h5>Privacy Shield Policy</h5>
			<p style={{ textAlign: 'justify' }}>
				Radix Haven&nbsp;Inc. (&ldquo;Radix Haven&rdquo;) has adopted this Privacy Shield
				Policy (&ldquo;Policy&rdquo;) to establish and maintain an adequate level of
				Personal Data privacy protection. This Policy applies to the processing of
				Personal Data that&nbsp;Radix Haven&nbsp;obtains from Customers located in the
				European Union and Switzerland.
			</p>
			<p style={{ textAlign: 'justify' }}>
				Radix Haven&nbsp;complies with the EU-U.S. Privacy Shield Framework and Swiss-US
				Privacy Shield Framework as set forth by the US Department of Commerce regarding
				the collection, use, and retention of personal information from Individual
				Customers in the European Union member countries and Switzerland.&nbsp;Radix
				Haven&nbsp;adheres to the Privacy Shield Privacy Principles of notice, choice,
				accountability for onward transfer, security, data integrity and purpose
				limitation, access, recourse, enforcement and liability. If there is any conflict
				between the policies in this privacy policy and the Privacy Shield Privacy
				Principles, the Privacy Shield Privacy Principles shall govern. To learn more
				about the Privacy Shield program, and to view our certification page once it is
				complete, please visit https://www.privacyshield.gov.
			</p>
			<p style={{ textAlign: 'justify' }}>
				The Federal Trade Commission (FTC) has jurisdiction over&nbsp;Radix Haven&rsquo;s
				compliance with the Privacy Shield.
			</p>
			<p style={{ textAlign: 'justify' }}>
				All&nbsp;Radix Haven&nbsp;employees who handle Personal Data from Europe and
				Switzerland are required to comply with the Principles stated in this Policy.
			</p>
			<p style={{ textAlign: 'justify' }}>
				Capitalized terms are defined in Section 14 of this Policy.
			</p>
			<p style={{ textAlign: 'justify' }}>
				By using this Website, placing an order with&nbsp;Radix Haven&nbsp;on this Website
				or through other means, clicking the &ldquo;buy&rdquo; button, or checking the
				terms and conditions box, you agree to the&nbsp;Radix Haven&nbsp;Terms and
				Conditions set forth below, including, without limitation, the Privacy Policy
				https://radixhaven.com/privacy.
			</p>
			<h5>Scope</h5>
			<ul className='list-item-footer' style={{ textAlign: 'justify' }}>
				<li>
					<p style={{ textAlign: 'justify' }}>
						This Policy applies to the processing of Individual Customer Personal Data
						that&nbsp;Radix Haven&nbsp;receives in the United States concerning Individual
						Customers who reside in the European Union and Switzerland.&nbsp;Radix
						Haven&nbsp;provides products and services to businesses and consumers.
					</p>
				</li>
				<li>
					<p style={{ textAlign: 'justify' }}>
						This Policy does not cover data from which individual persons cannot be
						identified or situations in which pseudonyms are used. (The use of pseudonyms
						involves the replacement of names or other identifiers with substitutes so
						that identification of individual persons is not possible.)
					</p>
				</li>
			</ul>
			<h5>Responsibilities And Management</h5>
			<ul className='list-item-footer'>
				<li>
					<p style={{ textAlign: 'justify' }}>
						Radix Haven has designated the Legal Department to oversee its information
						security program, including its compliance with the EU and Swiss Privacy
						Shield program. The Legal Department shall review and approve any material
						changes to this program as necessary. Any questions, concerns, or comments
						regarding this Policy also may be directed to PrivacyShield@radixhaven.com.
					</p>
				</li>
				<li>
					<p style={{ textAlign: 'justify' }}>
						Radix Haven&nbsp;will maintain, monitor, test, and upgrade information
						security policies, practices, and systems to assist in protecting the Personal
						Data that it collects.&nbsp;Radix Haven&nbsp;personnel will receive training,
						as applicable, to effectively implement this Policy. Please refer to Section 7
						for a discussion of the steps that&nbsp;Radix Haven&nbsp;has undertaken to
						protect Personal Data.
					</p>
				</li>
			</ul>
			<h5>III. &nbsp;Renewal / Verification</h5>

			<p style={{ textAlign: 'justify' }}>
				Radix Haven&nbsp;is in the process of self-certification under EU-U.S. Privacy
				shield.&nbsp;Radix Haven&nbsp;will renew its EU-U.S. Privacy Shield and Swiss-US
				Privacy Shield certifications annually, unless it subsequently determines that it
				no longer needs such certification or if it employs a different adequacy
				mechanism.
			</p>
			<p style={{ textAlign: 'justify' }}>
				Prior to the re-certification,&nbsp;Radix Haven&nbsp;will conduct an in-house
				verification to ensure that its attestations and assertions about its treatment of
				Individual Customer Personal Data are accurate and that the company has
				appropriately implemented these practices. Specifically, as part of the
				verification process,&nbsp;Radix Haven&nbsp;will undertake the following:
			</p>
			<ul className='list-item-footer'>
				<li>
					<p style={{ textAlign: 'justify' }}>
						Review this Privacy Shield policy and its publicly posted website privacy
						policy to ensure that these policies accurately describe the practices
						regarding the collection of Individual Customer Personal Data
					</p>
				</li>
				<li>
					<p style={{ textAlign: 'justify' }}>
						Ensure that the publicly posted privacy policy informs Individual Customers
						of&nbsp;Radix Haven&rsquo;s participation in the EU-U.S Privacy Shield and
						Swiss-U.S. Privacy Shield programs and where to obtain a copy of additional
						information (e.g., a copy of this Policy)
					</p>
				</li>
				<li>
					<p style={{ textAlign: 'justify' }}>
						Ensure that this Policy continues to comply with the Privacy Shield principles
					</p>
				</li>
				<li>
					<p style={{ textAlign: 'justify' }}>
						Confirm that Individual Customers are made aware of the process for addressing
						complaints and any independent dispute resolution process (Radix
						Haven&nbsp;may do so through its publicly posted website, Individual Customer
						contract, or both)
					</p>
				</li>
				<li>
					<p style={{ textAlign: 'justify' }}>
						Review its processes and procedures for training Employees about&nbsp;Radix
						Haven&rsquo;s participation in the Privacy Shield programs and the appropriate
						handling of Individual&rsquo;s Personal Data
					</p>
				</li>
			</ul>
			<p style={{ textAlign: 'justify' }}>
				Radix Haven&nbsp;will prepare an internal verification statement on an annual
				basis.
			</p>
			<h5>&nbsp;Collection And Use Of Personal Data</h5>
			<p style={{ textAlign: 'justify' }}>
				Radix Haven&nbsp;provides various solutions to its Individual Customers who
				purchase its products.&nbsp;Radix Haven&nbsp;collects Personal Data from
				Individual Customers when they purchase its products, register with our website,
				log-in to their account, complete surveys, request information or otherwise
				communicate with us. For example,&nbsp;Radix Haven&nbsp;individual customers may
				choose to seek live support or post to a message board.
			</p>
			<p style={{ textAlign: 'justify' }}>
				The Personal Data that we collect may vary based on the Individual
				Customer&rsquo;s interaction with our website and request for our services. As a
				general matter,&nbsp;Radix Haven&nbsp;collects the following types of Personal
				Data from its Individual Customers: contact information, including, a contact
				person&rsquo;s name, work email address, work mailing address, work telephone
				number, title, and company name, as well as payment information (which might
				include credit card and/or bank account information). Individual customers have
				the option to log into their accounts online and to request service online,
				including through a live support option; we will collect information that they
				choose to provide to us through these portals.
			</p>
			<p style={{ textAlign: 'justify' }}>
				When Individual Customers use our services online, we will collect their IP
				address and browser type. We may associate IP address and browser type with a
				specific customer. We also may collect Personal Data from persons who contact us
				through our website to request additional information; in such a situation, we
				would collect contact information (as discussed above) and any other information
				that the person chooses to submit through our website.
			</p>
			<p style={{ textAlign: 'justify' }}>
				The information that we collect from Individual Customers is used for selling the
				products and services they buy from us, managing transactions, reporting,
				invoicing, renewals, other operations related to providing services and products
				to the Individual Customer.
			</p>
			<p style={{ textAlign: 'justify' }}>
				For certain products,&nbsp;Radix Haven&nbsp;serves as a service provider. In our
				capacity as a service provider, we will receive, store, and/or process Personal
				Data. In such cases, we are acting as a data processor and will process the
				personal information on behalf of and under the direction of our partners and/or
				agents. The information that we collect from our Individual Customers in this
				capacity is used for managing transactions, reporting, invoicing, renewals, other
				operations related to providing services to the Individual Customer, and as
				otherwise requested by our partner and/or agent.
			</p>
			<p style={{ textAlign: 'justify' }}>
				Radix Haven&nbsp;uses Personal Data that it collects directly from its Individual
				Customers and for its partners indirectly in its role as a service provider for
				the following business purposes, without limitation:
			</p>
			<ul className='list-item-footer'>
				<li>
					<p style={{ textAlign: 'justify' }}>
						maintaining and supporting its products, delivering and providing the
						requested products/services, and complying with its contractual obligations
						related thereto (including managing transactions, reporting, invoices,
						renewals, and other operations related to providing services to a Individual
						Customer);
					</p>
				</li>
				<li>
					<p style={{ textAlign: 'justify' }}>
						satisfying governmental reporting, tax, and other requirements (e.g.,
						import/export);
					</p>
				</li>
				<li>
					<p style={{ textAlign: 'justify' }}>
						storing and processing data, including Personal Data, in computer databases
						and servers located in the United States;
					</p>
				</li>
				<li>
					<p style={{ textAlign: 'justify' }}>
						verifying identity (e.g., for online access to accounts);
					</p>
				</li>
				<li>
					<p style={{ textAlign: 'justify' }}>as requested by the Individual Customer;</p>
				</li>
				<li>
					<p style={{ textAlign: 'justify' }}>
						for other business-related purposes permitted or required under applicable
						local law and regulation;
					</p>
				</li>
				<li>and as otherwise required by law.</li>
			</ul>
			<p style={{ textAlign: 'justify' }}>
				Radix Haven&nbsp;does not disclose personal information to third parties for
				purposes that are materially different that what it was originally collected for.
				Should this change in the future, we will provide individuals with the option to
				opt-out.
			</p>
			<h5>Disclosures/ Onward Transfers Of Personal Data</h5>

			<p style={{ textAlign: 'justify' }}>
				Except as otherwise provided herein,&nbsp;Radix Haven&nbsp;discloses Personal Data
				only to Third Parties who reasonably need to know such data only for the scope of
				the initial transaction and not for other purposes. Such recipients must agree to
				abide by confidentiality obligations.
			</p>
			<p style={{ textAlign: 'justify' }}>
				Radix Haven&nbsp;may provide Personal Data to Third Parties that act as agents,
				consultants, and contractors to perform tasks on behalf of and under our
				instructions. For example,&nbsp;Radix Haven&nbsp;may store such Personal Data in
				the facilities operated by Third Parties. Such Third Parties must agree to use
				such Personal Data only for the purposes for which they have been engaged
				by&nbsp;Radix Haven&nbsp;and they must either:
			</p>
			<ul className='list-item-footer'>
				<li>
					<p style={{ textAlign: 'justify' }}>
						comply with the Privacy Shield principles or another mechanism permitted by
						the applicable EU &amp; Swiss data protection law(s) for transfers and
						processing of Personal Data;
					</p>
				</li>
				<li>
					<p style={{ textAlign: 'justify' }}>
						or agree to provide adequate protections for the Personal Data that are no
						less protective than those set out in this Policy;
					</p>
				</li>
			</ul>
			<p style={{ textAlign: 'justify' }}>
				Radix Haven&nbsp;also may disclose Personal Data for other purposes or to other
				Third Parties when a Data Subject has consented to or requested such disclosure.
				Please be aware that&nbsp;Radix Haven&nbsp;may be required to disclose an
				individual&rsquo;s personal information in response to a lawful request by public
				authorities, including to meet national security or law enforcement
				requirements.&nbsp;Radix Haven&nbsp;is liable for appropriate onward transfers of
				personal data to third parties.
			</p>
			<h5>Sensitive Data</h5>
			<p style={{ textAlign: 'justify' }}>
				Radix Haven&nbsp;does not collect Sensitive Data from its Individual Customers.
			</p>
			<h5>VII. &nbsp;Data Integrity And Security</h5>

			<p style={{ textAlign: 'justify' }}>
				Radix Haven&nbsp;uses reasonable efforts to maintain the accuracy and integrity of
				Personal Data and to update it as appropriate.&nbsp;Radix Haven&nbsp;has
				implemented physical and technical safeguards to protect Personal Data from loss,
				misuse, and unauthorized access, disclosure, alternation, or destruction. For
				example, electronically stored Personal Data is stored on a secure network with
				firewall protection, and access to&nbsp;Radix Haven&rsquo;s electronic information
				systems requires user authentication via password or similar means.&nbsp;Radix
				Haven&nbsp;also employs access restrictions, limiting the scope of employees who
				have access to Individual Customer Personal Data.
			</p>
			<p style={{ textAlign: 'justify' }}>
				Further,&nbsp;Radix Haven&nbsp;uses secure encryption technology to protect
				certain categories of personal data. Despite these precautions, no data security
				safeguards guarantee 100% security all of the time.
			</p>
			<h5>VIII. &nbsp;Notification</h5>

			<p style={{ textAlign: 'justify' }}>
				Radix Haven&nbsp;notifies Individual Customers about its adherence to the EU-US
				Privacy Shield and Swiss-US Privacy Shield principles through its publicly posted
				website privacy policy, available at: https://radixhaven.com/privacy and take
				Individual customers approval and adherence to the current policy when they
				provide their information to us in the transactional process.
			</p>
			<h5>Accessing Personal Data</h5>

			<p style={{ textAlign: 'justify' }}>
				Radix Haven&nbsp;personnel may access and use Personal Data only if they are
				authorized to do so and only for the purpose for which they are authorized.
			</p>
			<h5>Right To Access, Change Or Delete Personal Data</h5>
			<ul className='list-item-footer'>
				<li>
					<p style={{ textAlign: 'justify' }}>
						Right to Access. Individual Customers have the right to know what Personal
						Data about them is included in the databases and to ensure that such Personal
						Data is accurate and relevant for the purposes for which&nbsp;Radix
						Haven&nbsp;collected it. Individual Customers may review their own Personal
						Data stored in the databases and correct, erase, or block any data that is
						incorrect, as permitted by applicable law and&nbsp;Radix Haven&nbsp;policies.
						Upon reasonable request and as required by the Privacy Shield
						principles,&nbsp;Radix Haven&nbsp;allows Individual Customers access to their
						Personal Data, in order to correct or amend such data where inaccurate.
						Individual Customers may edit their Personal Data by logging into their
						account profile or by contacting&nbsp;Radix Haven&nbsp;by phone or email. In
						making modifications to their Personal Data, Data Subjects must provide only
						truthful, complete, and accurate information. To request erasure of Personal
						Data, Individual Customers should submit a written request to local&nbsp;Radix
						Haven&nbsp;office.
					</p>
				</li>
				<li>
					<p style={{ textAlign: 'justify' }}>
						Requests for Personal Data.&nbsp;Radix Haven&nbsp;will track each of the
						following and will provide notice to the appropriate parties under law and
						contract when either of the following circumstances arise: (a) legally binding
						request for disclosure of the Personal Data by a law enforcement authority
						unless prohibited by law or regulation; or (b) requests received from the Data
						Subject. If&nbsp;Radix Haven&nbsp;receives a request for access to their
						Personal Data from an Individual Customer, then, unless otherwise required
						under law or by contract with such Individual Customer,&nbsp;Radix
						Haven&nbsp;will refer such Data Subject to the Individual Customer.
					</p>
				</li>
				<li>
					<p style={{ textAlign: 'justify' }}>
						Satisfying Requests for Access, Modifications, and Corrections.&nbsp;Radix
						Haven&nbsp;will endeavor to respond in a timely manner to all reasonable
						written requests to view, modify, or inactivate Personal Data.
					</p>
				</li>
			</ul>
			<h5>XII. &nbsp;Changes To This Policy</h5>

			<p style={{ textAlign: 'justify' }}>
				This Policy may be amended from time to time, consistent with the Privacy Shield
				Principles and applicable data protection and privacy laws and principles. We will
				make employees available of changes to this policy either by posting to our
				intranet, through email, or other means. We will notify Customers if we make
				changes that materially affect the way we handle Personal Data previously
				collected, and we will allow them to choose whether their Personal Data may be
				used in any materially different manner.
			</p>
			<h5>XIII. &nbsp;QUestions Or Complaints</h5>

			<p style={{ textAlign: 'justify' }}>
				EU and Swiss Individual customers may contact&nbsp;Radix Haven&nbsp;with questions
				or complaints concerning this Policy at the following address:
			</p>
			<p style={{ textAlign: 'justify' }}>PrivacyShield@radixhaven.com</p>
			<h5>XIII. &nbsp;Enforcement And Dispute Resolution</h5>

			<p style={{ textAlign: 'justify' }}>
				In compliance with the EU-U.S. and Swiss-US Privacy Shield Principles,&nbsp;Radix
				Haven&nbsp;commits to resolve complaints about your privacy and our collection or
				use of your personal information. EU and Swiss individuals with questions or
				concerns about the use of their Personal Data should contact us at:
				PrivacyShield@radixhaven.com.
			</p>
			<p style={{ textAlign: 'justify' }}>
				If a Customer&rsquo;s question or concern cannot be satisfied through this
				process&nbsp;Radix Haven&nbsp;has further committed to refer unresolved privacy
				complaints under EU-U.S. Privacy Shield and Swiss-US Privacy Shield to an
				independent dispute resolution mechanism operated by the JAMS.
			</p>
			<p style={{ textAlign: 'justify' }}>
				If you do not receive timely acknowledgement of your complaint, or if your
				complaint is not satisfactorily addressed by&nbsp;Radix Haven, EU and Swiss
				individuals may bring a complaint before the JAMS EU-U.S. Privacy Shield and
				Swiss-U.S. Privacy Shield Frameworks program can be found at:
				https://www.jamsadr.com/eu-us-privacy-shield.
			</p>
			<p style={{ textAlign: 'justify' }}>
				Finally, as a last resort and in limited situations, EU and Swiss individuals may
				seek redress from the Privacy Shield Panel, a binding arbitration mechanism.
			</p>
			<h5>XIV. &nbsp;Defined Terms</h5>

			<p style={{ textAlign: 'justify' }}>
				Capitalized terms in this Privacy Policy have the following meanings:
			</p>
			<p style={{ textAlign: 'justify' }}>
				&ldquo;Individual Customer&rdquo; means an Individual customer or client
				of&nbsp;Radix Haven&nbsp;from EU or Switzerland. The term also shall include any
				individual agent, representative, of an individual customer of&nbsp;Radix
				Haven&nbsp;and all employee of&nbsp;Radix Haven&nbsp;where&nbsp;Radix
				Haven&nbsp;has obtained his or her Personal Data from such Individual Customer as
				part of its business relationship with&nbsp;Radix Haven.
			</p>
			<p style={{ textAlign: 'justify' }}>
				&ldquo;Data Subject&rdquo; means an identified or identifiable natural living
				person. An identifiable person is one who can be identified, directly or
				indirectly, by reference to a name, or to one or more factors unique to his or her
				personal physical, psychological, mental, economic, cultural or social
				characteristics. For Customers residing in Switzerland, a Data Subject also may
				include a legal entity.
			</p>
			<p style={{ textAlign: 'justify' }}>
				&ldquo;Employee&rdquo; means an employee (whether temporary, permanent, part-time,
				or contract), former employee, independent contractor, or job applicant
				of&nbsp;Radix Haven&nbsp;or any of its affiliates or subsidiaries, who is also a
				resident of a country within the European Economic Area.
			</p>
			<p style={{ textAlign: 'justify' }}>
				&ldquo;Europe&rdquo; or &ldquo;European&rdquo; refers to a country in the European
				Union.
			</p>
			<p style={{ textAlign: 'justify' }}>
				&ldquo;Personal Data&rdquo; as defined under the European Union Directive 95/46/EC
				means data that personally identifies or may be used to personally identify a
				person, including an individual&rsquo;s name in combination with country of birth,
				marital status, emergency contact, salary information, terms of employment, job
				qualifications (such as educational degrees earned), address, phone number, e-mail
				address, user ID, password, and identification numbers. Personal Data does not
				include data that is de-identified, anonymous, or publicly available. For
				Switzerland, the term &ldquo;person&rdquo; includes both a natural person and a
				legal entity, regardless of the form of the legal entity.
			</p>
			<p style={{ textAlign: 'justify' }}>
				&ldquo;Sensitive Data&rdquo; means Personal Data that discloses a Data
				Subject&rsquo;s medical or health condition, race or ethnicity, political,
				religious or philosophical affiliations or opinions, sexual orientation, or trade
				union membership.
			</p>
			<p style={{ textAlign: 'justify' }}>
				&ldquo;Third Party&rdquo; means any individual or entity that is
				neither&nbsp;Radix Haven&nbsp;nor a&nbsp;Radix Haven&nbsp;employee, agent,
				contractor, or representative.
			</p>
		</div>
	);
};

export const SecurityTemplate = () => {
	return (
		<div>
			<h5>File Systems and Communication</h5>
			<p style={{ textAlign: 'justify' }}>
				All access to the Radix Haven website is restricted to HTTPS encrypted
				connections. All data retrieval from Stripe is done with your unique access token
				over a secure connection with Stripe&rsquo;s API.
				<br />
				User passwords are secured with BCrypt. They are never stored in the database in
				plaintext and are not readable by staff. Passwords do provide access to the Radix
				Haven website, however, and it is the responsibility of the end user to protect
				his password with care.
				<br />
				Integration with your Stripe account is done via API keys.
			</p>
			<h5>Employee Access</h5>
			<p style={{ textAlign: 'justify' }}>
				No Radix Haven staff will access your business metrics unless required for support
				reasons. In cases where staff must access business metrics in order to perform
				support, we will get your explicit consent each time, except when responding to a
				critical security issue or suspected abuse.
				<br />
				When working a support issue we do our best to respect your privacy as much as
				possible, we only access the minimum data needed to resolve your issue.
				<br />
				Finally, it&rsquo;s worth noting that Radix Haven&rsquo; staff is quite small,
				limiting the number of individuals who would provide you support.
			</p>
			<h5>Credit Card Safety</h5>
			<p style={{ textAlign: 'justify' }}>
				<br />
				When you purchase a paid Radix Haven subscription, update credit card info through
				Recover or update any billing information, your credit card data is not
				transmitted through nor stored on our systems. Instead, we depend on Stripe, a
				company dedicated to this task. Stripe is certified to PCI Service Provider Level
				1, the most stringent level of certification available. Stripe&rsquo;s security
			</p>
			<h5>
				Contact Us
				<br />
			</h5>
			<p style={{ textAlign: 'justify' }}>
				Have a question or concern? Please email us at&nbsp;
				<a href='mailto:info@radixhaven.com'>info@radixhaven.com</a>
			</p>
		</div>
	);
};

export const SupportTemplate = () => {
	return (
		<div>
			<h5>
				Please contact us at:
				<br />
			</h5>
			<a href='mailto:support@radixhaven.com'>support@radixhaven.com</a>
			<br />
			<span style={{ color: '#51cbec', marginBottom: '10px' }}> 628-245-5777 </span>
			<p style={{ textAlign: 'justify' }}>
				Radix Haven, Inc hours are 8 am- 5 pm Eastern Time, Monday - Saturday, excluding
				US Holidays. Our goal is to respond to your inquiry within 1 business day. Please
				note that it may take longer depending on current volume. Thank your for taking
				the time to write to us. We look forward to helping you.
			</p>
		</div>
	);
};
