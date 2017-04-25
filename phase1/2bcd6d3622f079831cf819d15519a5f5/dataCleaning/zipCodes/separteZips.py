import json

file_location = "raw_data/zcta5_us_2016.geo.json"

file = open(file_location)
json_obj = json.load(file)

for feature in json_obj["features"]:
	with open("processed_data/zip_" + feature["properties"]["GEOID10"] + ".json" , 'w+') as file_out:
		file_out.write(json.dumps(feature))
		file_out.close()