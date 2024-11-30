<script>
	import { base } from '$app/paths';
	import Banner from '$lib/Banner.svelte';
</script>

<svelte:head>
	<title>tarieven - Marion Plagge</title>
	<meta property="og:url" content="tarieven" />
	<meta property="og:title" content="tarieven" />
	<meta
		property="og:description"
		content="tarieven en algemene voorwaarden voor behandeling van uw paard"
	/>
	<meta
		name="description"
		content="tarieven en algemene voorwaarden voor behandeling van uw paard"
	/>
</svelte:head>
<Banner title="TARIEVEN" image="images/background-images/tarieven_tg_2.jpg" />
<div id="wsite-content" class="wsite-elements wsite-not-footer">
	<div class="wsite-section-wrap">
		<div class="wsite-section wsite-body-section wsite-background-2 wsite-custom-background">
			<div class="wsite-section-content">
				<div class="container">
					<div class="wsite-section-elements">
						<div class="paragraph" style="text-align:left;">
							<table style="width: 70%;">
								<tbody>
									<tr>
										<td> <strong>Sportmassage of craniosacraaltherapie</strong> </td>
									</tr>
									<tr>
										<td>
											een behandeling duurt ongeveer 1- 1,5 uur<br />
											inclusief gebruik van essenti<font>ë</font>le oli<font>ë</font>n van Young
											Living
										</td>
										<td style="vertical-align: top; padding-left: 40px;">&nbsp; 90euro </td>
									</tr>
									<tr>
										<td>
											<br />
											<strong>Zouttherapie </strong>
										</td>
									</tr>
									<tr>
										<td> een behandeling duurt ongeveer 20 minuten<br /> </td>
										<td style="vertical-align: top; padding-left: 40px;"> 40&nbsp;euro </td>
									</tr>
									<tr>
										<td>
											een tweede paard in de trailer<br />
											(mits paarden goed met elkaar overweg kunnen)<br />
										</td>
										<td style="vertical-align: top; padding-left: 40px;"> 20&nbsp;euro </td>
									</tr>
								</tbody>
							</table>
							<br />
							<strong>Reiskosten</strong><br />
							Gerekend vanaf Wateren (Drenthe, postcode 8438 SB) reken ik 35 cent per kilometer, met
							zouttrailer 50 cent per kilometer.<br />
							<br />
						</div>
						<div class="paragraph" style="text-align:left;">
							Op al mijn diensten zijn mijn&nbsp;<a href={base + '/Algemene_voorwaarden_2018.pdf'}
								>algemene voorwaarden</a
							> van toepassing.
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
